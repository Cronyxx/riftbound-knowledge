# Site design and content plan

**Design recorded:** November 9, 2026

**Current stage:** The user approved all 14 Basics lessons as sourced notes on November 9, 2026. The Advanced Rules and Meta Deck Studies topic plans are approved and await drafting authorization.

## Permanent information architecture

The primary site has exactly three learning sections, in this order:

| Section | Canonical route | Purpose |
| --- | --- | --- |
| Basics | `/basics/` | A guided first game: objective, cards, play area, Might, domains, resources and costs, setup, turns, actions, movement, combat, scoring, a walkthrough, then deckbuilding. |
| Advanced Rules | `/advanced/` | Card vocabulary and mechanics, timing and reactions, chains, choices, triggers, effects and cleanup, combat edge cases, then combined interactions. |
| Meta Deck Studies | `/meta/` | Evidence-based studies of competitive decks and how to pilot them. |

Each section index is the authoritative proposed topic list. The homepage presents these three sections; the navigation and sidebar follow the same order. Start here, sources, contributing, and this plan are supporting pages, not additional learning sections.

Sidebar groups are collapsible and start expanded. Readers can toggle each section heading to hide or show its links.

Future articles live under `docs/basics/<topic>.md`, `docs/advanced/<topic>.md`, or `docs/meta/<deck-or-topic>.md`. Add real article links to both the section index and sidebar when creating them. Use descriptive, stable filenames. Until then, topic rows remain plain text with their status; do not link to nonexistent pages.

Preserve existing `/rules/` and `/interactions/` URLs as supporting research checklists. Move their material into the appropriate section only as approved articles are written, keeping a useful pointer at an old URL if its content moves. Do not create a fourth primary section.

## Learning order

The three overall groups are approved. Within each group, teach prerequisites before concepts that depend on them. The section indexes record the exact order.

- **Basics:** orient the reader with the goal, cards, and play area; introduce Might, domains, and resources; use a prepared deck for setup and turn flow; explain actions, movement, combat, and scoring; complete a guided game before asking the reader to build a deck. Introduce the objective briefly at the start and practice ordinary scoring after combat; reserve exact timing and scoring exceptions for Advanced Rules. Keep each lesson focused on one small concept.
- **Advanced Rules:** decode mechanics and keywords before studying timing; introduce reaction opportunities and chains before detailed choices and triggers; teach effects and cleanup before combined combat cases and special interactions. Individual mechanics may link forward to timing prerequisites without trying to teach every exception in the opening overview.
- **Meta Deck Studies:** establish the competitive context, then let readers choose a study. In each study, explain the deck’s goal before its full list, then connect key cards to opening decisions, play patterns, matchup adjustments, and practice.

This is an editorial learning sequence, not a claim about the order of procedures in the official rulebook. Every eventual gameplay procedure must still follow the current official rules.

## Beginner writing rules

These requirements apply to all Basics lessons:

- Keep concepts simple and concrete, with enough explanation to make them useful. Do not reduce lessons to slogans or arithmetic examples that fail to teach gameplay.
- Use accurate game terms and define them in plain language at first mention. Do not rely on vocabulary that appears only in a future lesson. Avoid introducing a technical term merely to explain another technical term.
- Retain useful official vocabulary such as Conquer, Hold, and Victory Score alongside simple explanations. Simplify the concept rather than replacing accurate terms with vague substitutes.
- Explain the normal pattern without implying it has no exceptions. State an introductory goal as a goal rather than an exhaustive victory procedure.
- Teach the normal rule and simple limits needed to make the example accurate, such as scoring a battlefield once per turn. Reserve exact timing procedures, cleanup, final-point restrictions, and unusual interactions for Advanced Rules.
- Preserve exact official references, versions, and review dates in an expandable reference note. Beginners should be able to read the lesson without reading rule numbers or source metadata.
- Add simple diagrams where they clarify the concept. Use the same defined terms as the lesson, descriptive alt text, legible labels, and the existing site colors. Use realistic table layouts and card positions when they help teach gameplay. Clearly label partial layouts and example assumptions; keep diagrams consistent with cited rules.
- Do not pad each lesson with mandatory FAQs, multiple examples, or exceptions. Add them only when they help the immediate concept.

Objective of the game introduces Victory Score, battlefields, Conquer, Hold, and Beginning Phase with immediate definitions and a conquer-then-hold example. Detailed victory checks and final-point exceptions remain in the Advanced Rules outline for later approved drafting.

## Approval process

1. Keep the approved three-section grouping. Present revisions to topic outlines as needed; the Basics learning path now includes all 14 planned lessons.
2. Await explicit user approval for a named topic or a small, named batch before drafting detailed explanations or deck studies. Do not interpret approval of the layout as approval to fill every topic.
3. After drafting is authorized, verify sources, write the article, and label it **Draft — awaiting review**. Make clear to readers that a draft is still under review.
4. Await user review before marking an article **Sourced note** or **Reviewed study**. Apply requested revisions within the approved scope.
5. Continue incrementally, proposing the next topic without automatically drafting it. Approval persists for the scope the user explicitly authorizes.

**Approved lesson:** [Basics → Objective of the game](/basics/objective) is approved for two-player 1v1 (Duel), checked against Core Rules dated October 9, 2026 and the relevant current update material on November 9, 2026. The user approved its current content and diagrams on November 9, 2026; it is marked Sourced note. **Approved lesson:** [Meet the cards](/basics/meet-the-cards) is a Sourced note with six official card examples and a Proving Grounds layout diagram. It introduces card types, Champion Legend versus Chosen Champion, and deck groups without teaching costs or setup. **Approved lesson.** [The play area](/basics/play-area) is a Sourced note. It uses the Proving Grounds diagrams and follows a unit from the Main Deck to the Trash. **Approved Basics batch.** [Reading a unit](/basics/reading-a-unit) uses Garen, Commander to teach printed Might and rules text. [Domains](/basics/domains) uses Garen’s Legend and a Body Rune to teach domain identity. [Runes, resources, and costs](/basics/runes-and-costs) demonstrates paying for Garen, Commander with Basic Runes. [Game setup](/basics/game-setup) covers Duel setup and the opening hand with a Proving Grounds layout diagram. [A turn, step by step](/basics/turn-structure) teaches Duel phases with a first-turn Daring Poro example. [Playing cards and using abilities](/basics/playing-cards) uses printed cards to show where units, gear, and spells go and how to use an activated ability. [Movement and battlefields](/basics/movement) introduces Standard Move and shows what happens when a unit arrives at a battlefield. [Your first combat](/basics/combat) illustrates simultaneous damage and control in a fight between two units. [Scoring and winning](/basics/scoring) practices the scoring limit and earning the eighth point by holding. [Your first game](/basics/first-game) follows a scripted Garen versus Lux practice game from setup to the eighth point. [Build your first deck](/basics/build-your-first-deck) covers constructed Duel requirements and a Garen starter deck swap. The user approved this batch on November 9, 2026. The next planned topic is **Mechanics and keywords** in Advanced Rules. For the first deck study, agree on format, region, date range, and deck selection before research and drafting. A broad request to proceed can authorize a named batch when the scope is clear; do not repeatedly ask for approval already given.

## Rules accuracy and references

- Consult the live [Riot Rules Hub](https://playriftbound.com/en-us/rules-hub/) before each rules article; do not assume this plan’s source versions remain current.
- Cite the actual official document URL, title, version/date, exact rule number or section, and review date. For Basics, keep the mapping to the lesson’s claims in an expandable reference note; advanced articles should place citations beside the explanations they support.
- Check applicable patch notes, FAQs, card text, and errata as well as the Core Rules. For event procedures and legality, consult Tournament Rules and the appropriate format’s current legality information.
- Explain rules in original, beginner-friendly language; do not copy long rulebook passages. Cite exceptions and check examples against the rules.
- Specify the mode/format where it affects setup, deck construction, scoring, or a ruling. Do not silently generalize one mode to all play.
- Record uncertainty as **Open question** rather than inventing a rule. A source link alone does not make an explanation verified.
- On November 9, 2026, the hub listed Core Rules and Tournament Rules last updated October 9, 2026, plus Radiance patch notes effective October 16, 2026. This is a reference baseline, not article-level verification.

## Deck study evidence

Record the format, region, date range, list source, event/result when applicable, and review date. Check current legality and errata. Link rules-dependent sequences to exact official references or approved rules articles.

Separate rule facts, observed tournament results, and strategic judgments. Do not invent tier placements, win rates, decklists, or matchup evidence. Label hypotheses and small samples. Keep an older study dated and mark it for recheck when rules, legality, or the competitive environment changes.

## Writing and maintenance

Each basics article answers one small question in plain language, using an optional short example and only concepts introduced in that lesson or earlier ones. Keep official references in an expandable source note and add a next lesson link when available. Each advanced article records context, a precise question, an ordered explanation, and references. Each deck study follows the outline on the Meta Deck Studies index.

Keep status labels consistent with [Start here](/start-here). After an approved change, update navigation and the relevant index, then run `npm run docs:build` to check the production site and internal links. Update this plan when the user changes the structure or approval workflow.
