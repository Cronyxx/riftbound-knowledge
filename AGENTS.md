# Project instructions

Read `docs/site-design.md` before changing site structure or content. It records the user’s requested layout, content workflow, and sourcing requirements.

- Keep the three primary sections in order: Basics (`/basics/`), Advanced Rules (`/advanced/`), Meta Deck Studies (`/meta/`). Supporting pages are not additional learning sections.
- Detailed articles and deck studies are added incrementally after user approval of a named topic or batch. Layout approval alone does not authorize filling all topics. Respect approval already given in the conversation.
- Basics must teach simple concepts using accurate game terms, defined at first mention or in an earlier lesson. Include enough context and a useful gameplay example; do not oversimplify into slogans. Keep technical procedures and exceptions in Advanced Rules; place precise Basics citations in an expandable reference note.
- Verify rules against current official Riot documents and cite exact rules/sections, document versions, and review dates. Separate deck strategy from rule facts; support meta claims with dated evidence.
- Keep section indexes, navigation, content status labels, and the design plan consistent. Preserve useful existing URLs.
- Run `npm run docs:build` after changes.
