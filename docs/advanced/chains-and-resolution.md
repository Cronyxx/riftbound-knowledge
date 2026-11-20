# Chains and resolution

::: warning Draft — awaiting review
For two-player Duel. Sources checked November 14, 2026.
:::

## From playing a card to resolving its effect

In Basics, you paid costs, played units, and followed spell instructions. This article unpacks the steps inside a play. Start here after [Build your first deck](/basics/build-your-first-deck); the next article explains the timing of responses in more detail.

Two terms will help: **Priority** is permission to take a discretionary action. **Reaction** is a keyword that can permit a card or ability to be played while a chain exists. You still need an opportunity to act. ([Core Rules][core], [312](/reference/core-rules#rule-312); [338](/reference/core-rules#rule-338); [813](/reference/core-rules#rule-813).)

## What resolves next?

The **Chain** holds cards and abilities being played. Items initially arrive as **pending**: their choices, costs, and legality still need processing. **Finalization** completes that preparation. Finalize pending items in the order they arrived; when players finish reacting, resolve the newest finalized item. These are different orders for different jobs. ([Core Rules][core], [327](/reference/core-rules#rule-327)–[340](/reference/core-rules#rule-340).)

## What happens during finalization?

**Finalization prepares a play and commits its choices and costs.** For a card already pending on the chain:

1. Choose modes, targets, relevant destinations, and optional additional costs.
2. Calculate the total cost, including modifiers.
3. Pay Energy and Power, then non-standard costs.
4. Check choices, payment, timing permission, and legality. A failed check undoes the attempted play.

Ordinary reactions wait until this preparation finishes. Resource-adding abilities have specific exceptions during payment. ([Core Rules][core], [354](/reference/core-rules#rule-354)–[358](/reference/core-rules#rule-358); [430.3](/reference/core-rules#rule-430-3).)

## What happens during resolution?

**Resolution carries out the effect.** For a spell or ordinary ability, follow its instructions in order, rechecking targets and making any choices reserved for this point. A spell then goes to its owner's trash. Players cannot insert an ordinary Reaction between its instructions. ([Core Rules][core], [340.1](/reference/core-rules#rule-340-1); [359.3](/reference/core-rules#rule-359-3); [407.5](/reference/core-rules#rule-407-5).)

| Question | Finalization | Resolution |
| --- | --- | --- |
| Which unit does Void Seeker target? | Select it. | Recheck its legality. |
| When do you pay the spell's cost? | Before responses. | Already paid. |
| When does its damage and draw happen? | Still waiting. | Follow the applicable instructions. |

See the [worked Void Seeker case](/advanced/costs-targets-and-choices#what-if-the-target-changes). ([Core Rules][core], [355](/reference/core-rules#rule-355); [357](/reference/core-rules#rule-357); [359.3.e.5](/reference/core-rules#rule-359-3-e-5).)

## Follow the procedure

1. Handle outstanding tasks, including required cleanups.
2. Finalize the oldest pending item, making choices, determining and paying costs, and checking legality.
3. A finalized unit, gear, or ability that Adds resources resolves immediately. Otherwise, finish processing remaining pending items.
4. Give Priority to the controller of the next item to resolve. Players can add legally timed Reactions or pass.
5. After consecutive passes by both players, resolve the newest finalized item completely. Handle new tasks and pending items before continuing.

Riot calls this process HOT FEPR: Handle Outstanding Tasks, then Finalize, Execute, Pass, Resolve. ([Core Rules][core], [332](/reference/core-rules#rule-332)–[340](/reference/core-rules#rule-340); [353](/reference/core-rules#rule-353)–[359](/reference/core-rules#rule-359).)

## Example: two spells

Assume spell A and Reaction spell B are legal, have no play triggers, and create no extra tasks beyond normal cleanup.

| Step | Chain, oldest → newest | What happens |
| --- | --- | --- |
| You finalize A | A | You receive Priority and pass. |
| Opponent finalizes B | A → B | The opponent receives Priority and passes; you also pass. |
| B resolves | A | Finish all of B's instructions and resulting tasks. |
| A remains | A | You receive Priority again. Both players must pass again before A resolves. |

An ability triggered while B resolves can become pending, but it does not interrupt B's instructions to resolve itself. ([Core Rules][core], [334](/reference/core-rules#rule-334); [337](/reference/core-rules#rule-337)–[340](/reference/core-rules#rule-340); [354.3](/reference/core-rules#rule-354-3).)

## Why a unit is different

You do not get the ordinary spell-style window between a unit's finalization and its entry onto the board. Its play effect may then create a separate triggered ability that players can react to. Likewise, an Add ability resolves immediately; a spell that adds resources follows normal spell timing. ([Core Rules][core], [337.2](/reference/core-rules#rule-337-2); [355.5.b](/reference/core-rules#rule-355-5-b); [359.2](/reference/core-rules#rule-359-2); [430.2](/reference/core-rules#rule-430-2).)

Riot's **Chronobreak** example demonstrates this with several pending units: process each unit's finalization and immediate resolution in arrival order. Their play-triggered abilities wait for their own finalization. Once pending items are processed, players can react to the next finalized ability. The unit entering and its play effect resolving are separate events. ([Radiance patch notes][patch], “Chronobreak” interaction, effective October 16, 2026.)

## A payment can belong to resolution

Do not assume every payment mentioned on a card is part of finalization. In Riot's **Riven, Broken Blade** example, spending the buff belongs to resolution of her exhaust-triggered ability. Its effect starts with choosing a mode; the later buff payment is an instruction within that effect, rather than its base cost. Placement of the payment in the ability matters. ([Radiance FAQ][faq], Riven's buff-payment question, October 26, 2026; rule [383.3.b](/reference/core-rules#rule-383-3-b).)

For the full treatment of triggered abilities and their choices, continue through the learning path to [Triggers](/advanced/triggers).

## Source record

[Riftbound Core Rules][core], updated October 9, 2026, rules cited above. [Radiance patch notes][patch], “Chronobreak” interaction and “Pending Item Target Legality,” effective October 16, confirm the distinction between pending items and later reactions. [Radiance FAQ][faq], October 26, Riven, Broken Blade's buff-payment question, distinguishes a later payment instruction from an ability's base cost. All checked with the [Rules Hub][hub] November 14, 2026.

[Previous: Build your first deck](/basics/build-your-first-deck) · [Next: Timing and reaction opportunities](/advanced/timing-and-reactions)

[core]: /reference/core-rules
[hub]: https://playriftbound.com/en-us/rules-hub/
[patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
[faq]: https://playriftbound.com/en-us/news/organizedplay/radiance-rules-faq-and-clarifications/
