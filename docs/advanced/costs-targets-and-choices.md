# Costs, targets, and choices

::: warning Draft — awaiting review
For two-player Duel. Sources and terminology checked November 21, 2026.
:::

## Which decisions happen before a response?

**Finalization** is the preparation step of a play: make required choices, determine and pay costs, then check whether the play is allowed. **Resolution** later carries out the prepared play.

The [chain procedure](/advanced/chains-and-resolution) introduces these stages. The [timing lesson](/advanced/timing-and-reactions) explains **Reaction**, permission to respond when you have an appropriate opportunity to act.

| Term | Meaning before using it in a play |
| --- | --- |
| **Mode** | A listed option the card or ability tells you to select. |
| **Target** | Something specifically selected for an effect, such as a unit. The targeting rules determine which selections count. |
| **Destination** | Where a unit will enter or where a move will take it. |
| **Base cost** | The card’s printed or copied Energy and Power costs before changes made while preparing this play. |
| **Additional cost** | A payment or action added to the cost. Some are required; others are optional. |
| **Total cost** | What must actually be paid after all applicable cost changes. |
| **Legality check** | Checking that the choices, payment, timing, and other requirements allow this play. |

Make the relevant choices, calculate the total, pay it, then check legality. Ordinary responses wait until this preparation finishes.

[Core Rules: 353](/reference/core-rules#rule-353)–[359](/reference/core-rules#rule-359), [204](/reference/core-rules#rule-204), [206](/reference/core-rules#rule-206).

## Pay costs in the right order

Units and gear are examples of **permanents**, cards that remain on the board after being played.

**Non-standard costs** require actions instead of Energy or Power. For example, **discard** means moving a card from your hand to your Trash; **kill** means a permanent goes from the board to the Trash.

Pay Energy and Power before those non-standard costs. If there are several non-standard costs, handle them in any allowed order.

An **Add ability** generates Energy or Power in your **Rune Pool**, your unspent resources. Activated Add abilities with Reaction can be used at the appropriate resource-payment step.

To **counter** a spell or ability is to stop its execution using the Counter action. This does not refund costs already paid to play it.

[Core Rules: 357.1](/reference/core-rules#rule-357-1)–[357.2](/reference/core-rules#rule-357-2), [423.1](/reference/core-rules#rule-423-1), [429.1](/reference/core-rules#rule-429-1), [430.3](/reference/core-rules#rule-430-3).

[Countering: 426.1](/reference/core-rules#rule-426-1)–[426.1.c](/reference/core-rules#rule-426-1-c).

### Atakhan and Mordekaiser

A **token** is a game piece created during play. To **banish** a card is to move it to **Banishment**, a zone separate from the Trash.

Atakhan lets you kill a non-token unit as an additional cost. Mordekaiser, Iron Revenant can banish a unit from your Trash to supply Power for a unit play.

You cannot use that same unit for both payments: Power is paid before the additional kill, so the unit is not yet in the Trash.

[Core Rules: tokens, 179](/reference/core-rules#rule-179)–[187](/reference/core-rules#rule-187), [banish, 428.1](/reference/core-rules#rule-428-1). [Radiance FAQ][faq], Atakhan/Mordekaiser question.

## A choice is not always a target

**Targeting** specifically selects something under the targeting rules. It can happen even when a card omits the literal word “choose.” Instructions affecting an entire group and some choices made by other players are exceptions.

**Picking** is a choice that does not count as targeting. It is not automatically committed during finalization. Follow the instruction that tells you when to pick.

For example, “each player kills a unit they control” lets each player pick their unit during resolution. A play targeting one particular unit normally selects that target during finalization.

[Core Rules: 355.5](/reference/core-rules#rule-355-5)–[355.10](/reference/core-rules#rule-355-10), [355.10.e](/reference/core-rules#rule-355-10-e).

## What if the target changes?

A **legal target** meets the play’s targeting requirements. Recheck those requirements when the effect resolves. An illegal target is unaffected; carry out any remaining applicable instructions.

Do not choose a replacement target without explicit permission. Losing a target does not by itself cancel the spell.

[Core Rules: 355.15](/reference/core-rules#rule-355-15), [359.3.e.1](/reference/core-rules#rule-359-3-e-1)–[359.3.e.8](/reference/core-rules#rule-359-3-e-8).

**Worked case:** Void Seeker targets a unit at a battlefield. A Reaction moves that unit to base before the spell resolves. Its battlefield target is now illegal, so it deals no damage to that unit.

The draw instruction still happens because it is independent of the failed damage instruction. The rulebook includes this exact example.

A **linked instruction** depends on an earlier instruction’s action or object. The [effects lesson](/advanced/effects-and-cleanup#impossible-and-illegal-are-different) explains how a failed instruction can affect later linked instructions.

[Core Rules: 359.3.e.5](/reference/core-rules#rule-359-3-e-5), [359.3.e.14](/reference/core-rules#rule-359-3-e-14).

For a fuller comparison of failed instructions and their consequences, see [Negated vs ignored](/advanced/negated-vs-ignored).

## Source record

[Core Rules][core], October 9, 2026 edition: costs, choices, targeting, and target rechecks at the references above.

[Radiance FAQ][faq], October 26, 2026, Atakhan/Mordekaiser question; [Radiance patch notes][patch], effective October 16, “Pick” and “Making New Choices.” Checked with the [Rules Hub][hub] November 21, 2026.

[Previous: Timing and reaction opportunities](/advanced/timing-and-reactions) · [Next: Triggers](/advanced/triggers)

[core]: /reference/core-rules
[hub]: https://playriftbound.com/en-us/rules-hub/
[patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
[faq]: https://playriftbound.com/en-us/news/organizedplay/radiance-rules-faq-and-clarifications/
