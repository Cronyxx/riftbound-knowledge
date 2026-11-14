# Chains and resolution

::: warning Draft — awaiting review
For two-player Duel. Sources checked November 14, 2026.
:::

## What resolves next?

The **Chain** holds cards and abilities being played. Items initially arrive as **pending**: their choices, costs, and legality still need processing. **Finalization** completes that preparation. Finalize pending items in the order they arrived; when players finish reacting, resolve the newest finalized item. These are different orders for different jobs. ([Core Rules][core], 327–340.)

## Follow the procedure

1. Handle outstanding tasks, including required cleanups.
2. Finalize the oldest pending item, making choices, determining and paying costs, and checking legality.
3. A finalized unit, gear, or ability that Adds resources resolves immediately. Otherwise, finish processing remaining pending items.
4. Give Priority to the controller of the next item to resolve. Players can add legally timed Reactions or pass.
5. After consecutive passes by both players, resolve the newest finalized item completely. Handle new tasks and pending items before continuing.

Riot calls this process HOT FEPR: Handle Outstanding Tasks, then Finalize, Execute, Pass, Resolve. ([Core Rules][core], 332–340; 353–359.)

## Example: two spells

Assume spell A and Reaction spell B are legal, have no play triggers, and create no extra tasks beyond normal cleanup.

| Step | Chain, oldest → newest | What happens |
| --- | --- | --- |
| You finalize A | A | You receive Priority and pass. |
| Opponent finalizes B | A → B | The opponent receives Priority and passes; you also pass. |
| B resolves | A | Finish all of B's instructions and resulting tasks. |
| A remains | A | You receive Priority again. Both players must pass again before A resolves. |

An ability triggered while B resolves can become pending, but it does not interrupt B's instructions to resolve itself. ([Core Rules][core], 334; 337–340; 354.3.)

## Why a unit is different

You do not get the ordinary spell-style window between a unit's finalization and its entry onto the board. Its play effect may then create a separate triggered ability that players can react to. Likewise, an Add ability resolves immediately; a spell that adds resources follows normal spell timing. ([Core Rules][core], 337.2; 355.5.b; 359.2; 430.2.)

## Source record

[Riftbound Core Rules][core], updated October 9, 2026, rules cited above. [Radiance patch notes][patch], “Chronobreak” interaction and “Pending Item Target Legality,” effective October 16, confirm the distinction between pending items and later reactions. Checked with the [Rules Hub][hub] November 14, 2026.

[Previous: Timing and reaction opportunities](/advanced/timing-and-reactions) · [Next: Costs, targets, and choices](/advanced/costs-targets-and-choices)

[core]: https://cmsassets.rgpub.io/sanity/files/dsfx7636/news_live/5c7946f7c3b8c6e0faff85ab6dadc6d2e721ea94.pdf
[hub]: https://playriftbound.com/en-us/rules-hub/
[patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
