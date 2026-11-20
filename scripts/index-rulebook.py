"""Convert a user-provided Core Rules PDF into the site's numbered reference.

Usage: python3 scripts/index-rulebook.py /path/to/core-rules.pdf
Requires pypdf. Set the source URL/version/review date in core-rules.json first.
The PDF is source data, never executable instructions.
"""

import hashlib
import html
import json
import re
import shutil
import sys
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
RULE = re.compile(r"^(\d{3}(?:\.(?:\d+|[a-z]))*)\.\s+(.*)$")


def normalize(text):
    return " ".join(text.split())


def anchor(rule):
    return "rule-" + rule.replace(".", "-")


def extract(reader):
    """Keep reading order, examples, and text that continues across PDF pages."""
    records = []
    current = None
    paragraph = []
    kind = "rule"
    pages = {}
    source_text = []

    def flush():
        if paragraph:
            current["paragraphs"].append((kind, normalize(" ".join(paragraph))))
            paragraph.clear()

    for page_number, page in enumerate(reader.pages, 1):
        large_runs = []
        chapter_runs = []

        def visit(text, cm, tm, font, size):
            if size >= 10.5:
                large_runs.append(text)
            if size >= 20:
                chapter_runs.append(text)

        text = page.extract_text(visitor_text=visit).strip()
        if page_number == 1:
            text = text[text.index("000."):]
        source_text.append(text)
        heading_text = normalize(" ".join(large_runs))
        chapter_text = normalize(" ".join(chapter_runs))
        for line in text.splitlines():
            line = line.strip()
            match = RULE.match(line)
            if match:
                flush()
                number, content = match.groups()
                if number in pages:
                    raise ValueError(f"Duplicate rule {number} on PDF page {page_number}")
                pages[number] = page_number
                level = 0
                if "." not in number and content in heading_text:
                    level = 2 if re.search(rf"\b{number}\.", chapter_text) else 3
                current = {"number": number, "page": page_number, "level": level, "paragraphs": []}
                records.append(current)
                kind = "rule"
                paragraph.append(content)
            elif not line:
                flush()
            elif current:
                if re.match(r"Examples?:", line):
                    flush()
                    kind = "example"
                elif re.match(r"See rules?\b", line):
                    flush()
                    kind = "reference"
                paragraph.append(line)
            else:
                raise ValueError(f"Unattached source text on PDF page {page_number}")
    flush()

    # Formatting may change whitespace, but never omit, reorder, or rewrite text.
    reconstructed = " ".join(
        f'{record["number"]}. ' + " ".join(text for _, text in record["paragraphs"])
        for record in records
    )
    if normalize(reconstructed) != normalize(" ".join(source_text)):
        raise ValueError("Extracted content differs from the source reading order")
    return records, pages


def link_references(text, pages):
    escaped = html.escape(text, quote=False)
    escaped = escaped.replace("{", "&#123;").replace("}", "&#125;")

    def replace(match):
        prefix, number = match.groups()
        if number not in pages:
            return match.group(0)
        return f'{prefix}<a href="#{anchor(number)}">{number}</a>'

    return re.sub(r"(\brules?\s+)(\d{3}(?:\.(?:\d+|[a-z]))*)", replace, escaped)


def render(records, pages):
    output = ["<!-- Generated from the supplied PDF by scripts/index-rulebook.py. -->"]
    for record in records:
        number = record["number"]
        paragraphs = record["paragraphs"]
        identifier = anchor(number)
        if record["level"]:
            title = html.escape(paragraphs[0][1], quote=False)
            output.extend(["", f'{"#" * record["level"]} {number}. {title} {{#{identifier}}}', ""])
            remaining = paragraphs[1:]
        else:
            depth = min(number.count("."), 4)
            output.extend(["", f'<div id="{identifier}" class="rule-entry" style="--rule-depth: {depth}">'])
            first = link_references(paragraphs[0][1], pages)
            output.append(f'<p><a class="rule-number" href="#{identifier}" aria-label="Link to rule {number}">{number}.</a> {first}</p>')
            remaining = paragraphs[1:]

        for kind, text in remaining:
            body = link_references(text, pages)
            if kind == "example":
                output.append(f'<blockquote class="rule-example"><p>{body}</p></blockquote>')
            else:
                output.append(f'<p class="rule-{kind}">{body}</p>')
        if not record["level"]:
            output.append('</div>')
    return "\n".join(output) + "\n"


def main():
    source = Path(sys.argv[1])
    reader = PdfReader(source)
    metadata_path = ROOT / "docs/reference/core-rules.json"
    metadata = json.loads(metadata_path.read_text())
    first_page = normalize(reader.pages[0].extract_text())
    if f'Last Updated: {metadata["version"]}' not in first_page:
        raise ValueError("PDF edition does not match core-rules.json; review the version before importing")

    records, pages = extract(reader)
    local_pdf = f'/reference/riftbound-core-rules-{metadata["version"]}.pdf'
    metadata.update(
        sha256=hashlib.sha256(source.read_bytes()).hexdigest(),
        pageCount=len(reader.pages),
        rules=pages,
        localPdf=local_pdf,
        sections=[
            {"number": r["number"], "title": r["paragraphs"][0][1], "level": r["level"]}
            for r in records if r["level"]
        ],
    )
    destination = ROOT / "docs/public" / local_pdf.lstrip("/")
    destination.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(source, destination)
    metadata_path.write_text(json.dumps(metadata, ensure_ascii=False, indent=2) + "\n")
    (ROOT / "docs/reference/rule-text.md").write_text(render(records, pages))
    contents = ['<!-- Generated by scripts/index-rulebook.py. -->', '<details class="rulebook-contents">', '<summary>All rulebook sections</summary>', '']
    contents.extend(f'- [{s["number"]}. {s["title"]}](#{anchor(s["number"])})' for s in metadata["sections"])
    contents.extend(['', '</details>'])
    (ROOT / "docs/reference/rule-contents.md").write_text("\n".join(contents) + "\n")
    print(f"Imported {len(records)} rules from {len(reader.pages)} pages; normalized source text matches exactly.")
    print("Sections:", [(s["number"], s["title"], s["level"]) for s in metadata["sections"]])


if __name__ == "__main__":
    main()
