# Timing and reaction opportunities

::: warning Draft — awaiting review
For two-player Duel. Sources and terminology checked November 21, 2026.
:::

## Can I act right now?

The [previous lesson](/advanced/chains-and-resolution) introduced the **chain**, the temporary zone holding plays, and **finalization**, preparing their choices and costs. **Resolution** carries out a prepared play.

A **pending item** still needs that preparation. A **finalized item** has completed it. This lesson explains who may act between those stages and between resolutions.

A **showdown** is a structured opportunity for players to alternate plays. Combat includes a showdown before damage, and a showdown can also happen without combat.

[Core Rules: 327](/reference/core-rules#rule-327)–[330](/reference/core-rules#rule-330), [341](/reference/core-rules#rule-341)–[348](/reference/core-rules#rule-348).

## Priority and Focus are different

A **discretionary action** is an action you choose to take, such as playing a card. **Priority** is the exclusive permission to take an appropriately timed discretionary action.

**Focus** identifies whose opportunity it is to start a play during an open showdown. Receiving Focus also gives Priority.

To **pass** is to decline another play at your current opportunity. Passing Priority during a chain keeps Focus with its current holder. Passing Focus in an open showdown hands that opportunity to the other player.

[Core Rules: 312](/reference/core-rules#rule-312)–[313](/reference/core-rules#rule-313), [345](/reference/core-rules#rule-345)–[347](/reference/core-rules#rule-347).

## Read the game state before the keyword

A **game state** is a timing description. **Open** means there is no chain; **Closed** means there is one. **Neutral** means no showdown or combat is ongoing; **Showdown** means one is ongoing.

The **turn player** is the player whose turn it is. These labels combine into the four states in the table below.

A **keyword** is shorthand for longer rules text. **Action** permits a play during an open showdown on either player’s turn, in addition to its ordinary timing.

**Reaction** includes Action’s permissions and also permits play while a chain exists. You still need the appropriate opportunity to act. Neither keyword lets you interrupt instructions during resolution.

| State | What is happening? | Ordinary permission |
| --- | --- | --- |
| Neutral Open | No showdown or combat; no chain | The turn player acts during their Main Phase. |
| Neutral Closed | No showdown or combat; a chain exists | The player with Priority may play a permitted Reaction. |
| Showdown Open | A showdown or combat is underway; no chain | During the showdown’s play opportunities, the player with Focus and Priority may play an Action or Reaction. |
| Showdown Closed | A chain exists during a showdown or combat | The player with Priority may play a permitted Reaction. |

These labels do not create opportunities during required procedures such as combat damage. Card text and resource-payment rules can supply specific exceptions.

[Core Rules: 303.1](/reference/core-rules#rule-303-1), [307](/reference/core-rules#rule-307)–[313](/reference/core-rules#rule-313), [806](/reference/core-rules#rule-806), [813](/reference/core-rules#rule-813).

## Passing during a chain

An item’s **controller** is the player directing its choices. Once pending items have been prepared, the controller of the next item to resolve receives Priority first.

That player may add a permitted Reaction or pass. If both players pass in sequence without adding an item, the newest finalized item resolves. Check again afterward: each remaining item needs its own response procedure.

[Core Rules: 337](/reference/core-rules#rule-337)–[340](/reference/core-rules#rule-340).

## Example: an Action during combat

You have Focus and Priority in an open combat showdown. You play an Action spell, creating a chain. The state is now Closed.

Your opponent cannot answer with a card that has only Action. They may play a legal Reaction when they receive Priority. The keyword and the opportunity to act must both permit the play.

Once that chain empties, Focus normally moves to the other player. A chain started by a triggered ability—one added automatically after its stated event—does not cause that Focus change.

An **Add ability** puts Energy or Power into your **Rune Pool**, your supply of unspent resources. A chain started by an Add ability also does not cause that Focus change.

If both players instead pass Focus in sequence without playing anything, the showdown ends.

[Core Rules: 340.2](/reference/core-rules#rule-340-2), [345](/reference/core-rules#rule-345)–[348](/reference/core-rules#rule-348), [430.1](/reference/core-rules#rule-430-1)–[430.3](/reference/core-rules#rule-430-3).

Add abilities have special immediate processing and certain payment opportunities. The [first lesson](/advanced/chains-and-resolution#why-a-unit-is-different) introduces that exception; the next lesson applies it to costs.

## Source record

[Core Rules][core], October 9, 2026 edition: game states, Priority, Focus, and the Action and Reaction keywords at the references above.

[Radiance patch notes][patch], effective October 16, 2026, and the [Rules Hub][hub] checked November 21, 2026.

[Previous: Chains and resolution](/advanced/chains-and-resolution) · [Next: Costs, targets, and choices](/advanced/costs-targets-and-choices)

[core]: /reference/core-rules
[hub]: https://playriftbound.com/en-us/rules-hub/
[patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
