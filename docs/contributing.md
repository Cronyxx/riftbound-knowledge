# Writing a rules note

The site is written in Markdown. Each page should answer one clear question and make its sources easy to check. Read the [site design and content plan](./site-design.md) first. Obtain user approval for a named topic or batch before drafting; completed drafts await user review before being marked as sourced or reviewed.

## Add a page

1. Create a `.md` file under `docs/basics/`, `docs/advanced/`, `docs/mechanics/`, or `docs/meta/`, according to the approved topic.
2. Copy the template below and fill in the context you know.
3. Link to the page from the relevant index. Add it to `themeConfig.sidebar` in `docs/.vitepress/config.mts` so readers can find it in its section.
4. Preview the site with `npm run docs:dev` and check the production build with `npm run docs:build`.
5. Submit the change through GitHub. The deployment workflow publishes changes merged to `main`.

For deck studies, use the [deck-study outline](./meta/index.md#proposed-deck-study-format) and distinguish strategic analysis from rules explanations.

For an approved individual mechanic, use `docs/mechanics/<mechanic>.md` and the [Mechanics study format](/mechanics/#what-each-study-contains). Explain the procedure, a worked example, edge cases, dated mechanic-wide changes, and separately identified card errata. Link exact local rulebook anchors beside the explanations and the relevant official update section beside each historical claim. Record the edition and review date; mark the new study Draft — awaiting review. Add it to the mechanic directory and the Mechanics sidebar group.

## Beginner lessons

Use the [beginner writing rules](./site-design.md#beginner-writing-rules): simple concepts, accurate game terms defined at first mention, and useful gameplay examples. Keep technicalities and exceptions in Advanced Rules. Put exact rule references and review information in an expandable reference note. The structured template below is most useful for advanced rules questions.

## Note template

```md
# A specific rules question

**Status:** Draft — awaiting review
**Format:** Specify the format
**Last reviewed:** YYYY-MM-DD

## Situation

Describe the cards, board state, and actions in order.

## Question

State the uncertainty precisely.

## Explanation

Leave this marked as unresolved until the answer has been checked.
When verified, explain the answer. After user review and approval, change the status to Sourced note.

## Sources

- [Official document title](https://playriftbound.com/en-us/rules-hub/)
  — document version/date, rule number or section, checked YYYY-MM-DD.
- Relevant card text or errata, if applicable.
```

## Editorial checks

- Link Core Rules numbers to the [official rulebook reference](/reference/core-rules), for example `[359.3.e.5](/reference/core-rules#rule-359-3-e-5)`. Link both endpoints of a range. Keep the edition and article review date with the citation; the reference page retains the official PDF URL.
- Numbered citations automatically gain hover/focus previews and a clickable reference pane. A section citation includes its subrules. Keep the standard Markdown URL; no special component is needed in an article. Official FAQs and patch notes remain direct links.
- Use current official sources and cite the specific section that supports the explanation.
- Distinguish a card’s printed text from any updated text.
- Write explanations in your own words; keep direct quotations brief.
- Make uncertain points explicit instead of presenting them as established rules.
- Recheck affected notes when rules or errata change.
- Use descriptive link labels and headings so search results are useful.

## Maintaining the rulebook copy

The user authorized a website copy of the PDF they supplied. Check the live Rules Hub and obtain the replacement document within the authorized scope before updating the reference. Update the source URL, version, and review date in `docs/reference/core-rules.json`, then run `python3 scripts/index-rulebook.py /path/to/core-rules.pdf` in an environment with `pypdf`. The script verifies the edition, records a SHA-256 checksum and rule-to-page mapping, and generates the full text, contents includes, and small excerpt bundles under `docs/public/reference/rules/` for citation previews. It preserves normalized source text in reading order and copies the source PDF to `docs/public/reference/`. The includes are excluded as standalone pages and are rendered by the canonical reference page. Check representative rules, examples, source pages, and existing citation anchors, then run `npm run test:rules` and `npm run docs:build`. Keep official wording intact; lesson explanations remain original prose. Do not silently relabel an older article as checked against a newer edition.
