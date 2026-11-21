# Negated vs ignored

::: warning Draft — awaiting review
For two-player Duel. Sources checked November 21, 2026. Card situations below follow examples in the October 9 Core Rules; card text is summarized, not reproduced in full. Assume no other relevant effects.
:::

## What happens when an instruction cannot be followed?

An **effect** changes the game. An **instruction** is one step it tells you to perform. **Resolution** is when a prepared spell or ability carries out its instructions, in order.

A **target** is something specifically selected for an effect. A **legal target** still meets its targeting requirements when the effect resolves. For example, a spell requiring a unit at a battlefield cannot affect that unit after it moves to base.

The [costs and choices lesson](/advanced/costs-targets-and-choices#what-if-the-target-changes) explains rechecking targets. Here, ask why a step fails and what that means for the instructions that follow.

| Term | Why the instruction fails | What happens to later linked instructions? |
| --- | --- | --- |
| **Ignored** | An illegal target or unavailable information prevents it. | Later instructions linked to that ignored instruction are also ignored. |
| **Negated** | Another reason prevents it: the action is impossible, replaced, or skipped. | They may still execute. Check whether they require the earlier action to have occurred. |

[Core Rules: 359.3.e.2](/reference/core-rules#rule-359-3-e-2), [359.3.e.6](/reference/core-rules#rule-359-3-e-6), [359.3.e.12](/reference/core-rules#rule-359-3-e-12), [359.3.e.14.a](/reference/core-rules#rule-359-3-e-14-a)–[359.3.e.14.b](/reference/core-rules#rule-359-3-e-14-b).

## First decide whether the instructions are linked

**Linked instructions** refer to a game piece affected by, or an action performed in, another instruction. “Its controller” refers back to a unit; “if you do” can refer back to an action. Sentence order alone does not establish a link.

A unit’s **controller** is the player currently controlling it. To **kill** a unit is to send it from the board to the Trash. These terms matter in Hidden Blade’s two instructions: kill a unit at a battlefield, then have its controller draw two cards.

The draw refers to the chosen unit, so those instructions are linked.

[Core Rules: 359.3.e.14](/reference/core-rules#rule-359-3-e-14), [429.1](/reference/core-rules#rule-429-1).

### Ignored: Hidden Blade loses its target

You play Hidden Blade targeting a unit at a battlefield. Before it resolves, the opponent uses Flash to move that unit to base.

1. The unit no longer meets the battlefield requirement, so it is an illegal target.
2. Ignore the kill instruction.
3. Ignore the linked draw instruction too. Its controller does not draw two cards.

[Core Rules: 359.3.e.6](/reference/core-rules#rule-359-3-e-6), [359.3.e.14.a](/reference/core-rules#rule-359-3-e-14-a), Hidden Blade examples.

### Negated: the target is legal, but the kill is replaced

A **replacement effect** changes an event into something else instead of letting the original event occur. Assume Hidden Blade’s target remains legal, but an applicable replacement effect replaces its death.

The kill instruction is negated. The linked draw still executes: it refers to the unit’s controller and does not require the kill to have happened.

[Core Rules: 359.3.e.14.b](/reference/core-rules#rule-359-3-e-14-b), Hidden Blade example.

## An impossible action can still leave another instruction to perform

To **ready** a unit is to turn it upright from its exhausted position. Ride the Wind instructs you to move a friendly unit and ready it. Vilemaw’s Lair prohibits units there from moving to base.

You choose a unit at Vilemaw’s Lair and base as its destination. Base is a legal choice, but the battlefield’s prohibition makes performing that move impossible.

The move is negated. The unit remains there and is readied. A legal choice and a possible action are separate checks.

[Core Rules: 359.3.e.6](/reference/core-rules#rule-359-3-e-6), [359.3.e.14.b](/reference/core-rules#rule-359-3-e-14-b), Ride the Wind examples.

## “If you do” can require the action to happen

Negated does not mean every later instruction succeeds. Deathgrip first kills a friendly unit, then conditionally increases another friendly unit’s Might based on that kill.

If a replacement effect prevents the first unit from being killed, the later instruction does not execute. Its “if you do” directly requires that kill to occur.

Check the referenced action itself. A change to its circumstances does not necessarily mean it failed: the rulebook’s damage example still permits a later “if you do” instruction when some, but not all, damage is prevented.

[Core Rules: 359.3.e.14.b](/reference/core-rules#rule-359-3-e-14-b), Deathgrip example; [359.3.e.14.c](/reference/core-rules#rule-359-3-e-14-c), partially prevented damage example.

## Independent instructions and partial results

Void Seeker deals damage to a unit at a battlefield and separately draws a card. If its target moves to base, the damage instruction is ignored, but the independent draw still happens.

**Discard** means moving a card from your hand to your Trash.

An impossible instruction can also be partly performed. The rulebook’s “discard two, then draw two” example has you discard your only card if you have one, then draw two. With an empty hand, the discard is negated and you still draw two.

Follow as much of an instruction as possible; do not invent extra cards to finish it.

[Core Rules: 359.3.e.5](/reference/core-rules#rule-359-3-e-5), [359.3.e.11](/reference/core-rules#rule-359-3-e-11), [423.1](/reference/core-rules#rule-423-1).

## A procedure for checking a new case

1. Read each instruction in order and identify its targets and required information.
2. Recheck legality and whether that information is available. A target leaving the board for a non-board zone (such as the hand or Trash) and returning is not treated like simply moving between board locations.
3. If a step fails, identify the cause: ignored or negated.
4. Trace links to that step. For a negated action, check any requirement that the action actually occurred.
5. Carry out all remaining applicable instructions. A spell can resolve with none of its instructions executing and still count as played.

[Core Rules: 359.3.e.3](/reference/core-rules#rule-359-3-e-3)–[359.3.e.4](/reference/core-rules#rule-359-3-e-4), [359.3.e.10](/reference/core-rules#rule-359-3-e-10), [359.3.e.12](/reference/core-rules#rule-359-3-e-12)–[359.3.e.14.c](/reference/core-rules#rule-359-3-e-14-c).

## Rules update and source record

The [Radiance patch notes][patch], published October 9 and effective October 16, 2026, codified the distinction under “Negated and Ignored Instructions,” following clarification in the earlier Vendetta FAQ. This is a rules update, separate from card errata.

This lesson uses [Riftbound Core Rules][core], updated October 9, 2026, especially 359.3.e and its printed examples. Exact citations above open the corresponding rule text.

The live [Rules Hub][hub] still lists that edition. The hub, Radiance patch notes, [Radiance FAQ][faq] (October 26), and [Radiance errata][errata] (October 9) were checked November 21, 2026.

[Previous: Effects, exceptions, and cleanup](/advanced/effects-and-cleanup) · [Next: Mechanics and keywords](/advanced/mechanics-and-keywords)

[core]: /reference/core-rules
[hub]: https://playriftbound.com/en-us/rules-hub/
[patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
[faq]: https://playriftbound.com/en-us/news/organizedplay/radiance-rules-faq-and-clarifications/
[errata]: https://playriftbound.com/en-us/news/announcements/radiance-errata-updates/
