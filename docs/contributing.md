# Writing a rules note

The site is written in Markdown. Each page should answer one clear question and make its sources easy to check. Read the [site design and content plan](./site-design.md) first. Obtain user approval for a named topic or batch before drafting; completed drafts await user review before being marked as sourced or reviewed.

## Add a page

1. Create a `.md` file under `docs/basics/`, `docs/advanced/`, or `docs/meta/`, according to the approved topic.
2. Copy the template below and fill in the context you know.
3. Link to the page from the relevant index. Add it to `themeConfig.sidebar` in `docs/.vitepress/config.mts` so readers can find it in its section.
4. Preview the site with `npm run docs:dev` and check the production build with `npm run docs:build`.
5. Submit the change through GitHub. The deployment workflow publishes changes merged to `main`.

For deck studies, use the [deck-study outline](./meta/index.md#proposed-deck-study-format) and distinguish strategic analysis from rules explanations.

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
- Use current official sources and cite the specific section that supports the explanation.
- Distinguish a card’s printed text from any updated text.
- Write explanations in your own words; keep direct quotations brief.
- Make uncertain points explicit instead of presenting them as established rules.
- Recheck affected notes when rules or errata change.
- Use descriptive link labels and headings so search results are useful.

## Maintaining the rulebook index

Check the live Rules Hub before updating the reference. Download the official PDF, update the source URL, version, and index review date in `docs/reference/core-rules.json`, then run `python3 scripts/index-rulebook.py /path/to/official-core-rules.pdf` in an environment with `pypdf`. The script records a SHA-256 checksum, PDF page count, and rule-to-page mapping and regenerates the anchor include without copying the rule text. Verify representative page mappings and existing citations before building. Do not silently relabel an older article as checked against a newer edition.
