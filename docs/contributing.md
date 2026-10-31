# Writing a rules note

The site is written in Markdown. Each page should answer one clear question and make its sources easy to check.

## Add a page

1. Create a `.md` file under `docs/rules/` or `docs/interactions/`.
2. Copy the template below and fill in the context you know.
3. Link to the page from the relevant index. Add it to `themeConfig.sidebar` in `docs/.vitepress/config.mts` if it belongs in navigation.
4. Preview the site with `npm run docs:dev` and check the production build with `npm run docs:build`.
5. Submit the change through GitHub. The deployment workflow publishes changes merged to `main`.

## Note template

```md
# A specific rules question

**Status:** Open question
**Format:** Specify the format
**Last reviewed:** YYYY-MM-DD

## Situation

Describe the cards, board state, and actions in order.

## Question

State the uncertainty precisely.

## Explanation

Leave this marked as unresolved until the answer has been checked.
When verified, explain the answer and change the status to Sourced note.

## Sources

- [Official document title](https://playriftbound.com/en-us/rules-hub/)
  — document version/date, rule number or section, checked YYYY-MM-DD.
- Relevant card text or errata, if applicable.
```

## Editorial checks

- Use current official sources and cite the specific section that supports the explanation.
- Distinguish a card’s printed text from any updated text.
- Write explanations in your own words; keep direct quotations brief.
- Make uncertain points explicit instead of presenting them as established rules.
- Recheck affected notes when rules or errata change.
- Use descriptive link labels and headings so search results are useful.
