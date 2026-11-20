# Chains and resolution

::: warning Draft — awaiting review
For two-player Duel. Sources and terminology checked November 21, 2026.
:::

## From playing a card to resolving its effect

Start here after [Build your first deck](/basics/build-your-first-deck). Basics showed you how to pay for cards and follow their instructions. This lesson explains the preparation and response steps inside a play.

An **ability** is a rule or capability of a card. Its **effect** is what it does to the game, such as dealing damage, drawing a card, or changing another card’s rules.

An **activated ability** is one you choose to use by paying its cost. A colon separates that cost from its instructions. See the [Seal of Unity example](/basics/playing-cards#use-an-ability-on-a-card-in-play) for a reminder.

[Core Rules: abilities, 361](/reference/core-rules#rule-361)–[377](/reference/core-rules#rule-377).

## What is a chain, and how is one created?

The **chain** is a temporary game zone: a place separate from the board that holds cards and abilities being played. Each card or ability there is a **chain item**.

When you begin playing a card, move it from its current zone to the chain. If the chain was empty, this creates a chain with one item. The card has not carried out its instructions yet.

For example, you begin playing Falling Comet from your hand. Put it on the chain. You still need to prepare its choices and payment before it can deal damage.

Playing an activated ability adds an item representing that ability. You do not move its card to the chain just because you used the ability.

A **triggered ability** is an ability that waits for a stated event, then adds an ability item automatically. For example, playing a unit can cause its “When you play me” ability to join the chain.

Further permitted plays add more items to the existing chain. When its last item leaves, the chain no longer exists.

[Core Rules: 328](/reference/core-rules#rule-328)–[330](/reference/core-rules#rule-330), [354](/reference/core-rules#rule-354), [383.3](/reference/core-rules#rule-383-3), [402.1](/reference/core-rules#rule-402-1).

## Three stages of a play

| Term | Meaning |
| --- | --- |
| **Pending item** | A newly added card or ability whose choices, costs, and legality still need preparation. |
| **Finalization** | Preparing that play: make its required choices, calculate and pay costs, and check whether the play is allowed. |
| **Finalized item** | A play that has completed that preparation. Its type determines when it resolves. |
| **Resolution** | Carrying out the prepared play: for example, applying a spell’s instructions or putting a unit onto the board. |

If an effect adds a pending item while another item is resolving, finish the current resolution before preparing the new item.

[Core Rules: 329](/reference/core-rules#rule-329), [354.2](/reference/core-rules#rule-354-2)–[354.3](/reference/core-rules#rule-354-3), [359.1](/reference/core-rules#rule-359-1)–[359.3](/reference/core-rules#rule-359-3).

## What resolves next?

Pending items are finalized in arrival order: oldest first. For spells and most abilities, resolution normally runs the other way: newest finalized item first, once players finish responding.

Units, gear, and abilities that generate resources have special immediate-resolution rules. Those are explained below before the complete procedure.

[Core Rules: 337.1](/reference/core-rules#rule-337-1)–[337.2](/reference/core-rules#rule-337-2), [339](/reference/core-rules#rule-339)–[340](/reference/core-rules#rule-340).

## Who can respond?

A **discretionary action** is something a player chooses to do, such as playing a card. This differs from carrying out a required instruction.

**Priority** is the exclusive permission to take an appropriately timed discretionary action. Having it does not let you interrupt an item while that item is resolving.

A **keyword** is shorthand for a longer rule. **Reaction** is a keyword granting permission to play in response to an existing chain, as well as at other permitted times. You still need the appropriate opportunity to act.

To **pass Priority** is to decline another play at that opportunity. When both Duel players pass in sequence without adding an item, the next finalized item resolves.

An item’s **controller** is the player directing its choices. After pending items are processed, the controller of the next item to resolve receives Priority first.

[Core Rules: 312](/reference/core-rules#rule-312), [338](/reference/core-rules#rule-338)–[340](/reference/core-rules#rule-340), [411.1](/reference/core-rules#rule-411-1)–[411.2](/reference/core-rules#rule-411-2), [813](/reference/core-rules#rule-813).

## What happens during finalization?

Before following the steps, distinguish the choices involved:

| Term | Meaning |
| --- | --- |
| **Mode** | One of the alternatives the card or ability tells you to choose. |
| **Target** | Something specifically selected for an effect, such as a unit. Some choices do not count as targets; the [choices lesson](/advanced/costs-targets-and-choices) explains those exceptions. |
| **Destination** | The location where a unit will enter or where a move will take it. |
| **Additional cost** | An extra payment or action added to the play’s cost. It can be required or optional. |
| **Total cost** | The full payment after additional costs, increases, reductions, and other applicable changes. |

For a pending card:

1. Choose its modes, targets, and relevant destinations. Decide whether to pay optional additional costs.
2. Determine the total cost.
3. Pay Energy and Power, then costs requiring other actions, such as discarding a card.
4. Check **legality**: whether the choices, payment, timing, and other requirements make this play allowed. A failed check undoes the attempt.

Ordinary Reactions wait until this preparation finishes. An **Add ability** puts Energy or Power into your **Rune Pool**, your supply of unspent resources. Certain Add abilities can be used during payment.

[Core Rules: 355](/reference/core-rules#rule-355)–[358](/reference/core-rules#rule-358), [430.1](/reference/core-rules#rule-430-1)–[430.3](/reference/core-rules#rule-430-3).

## What happens during resolution?

A card’s **owner** is the player who brought it into the game or created it during play. Changing who controls it does not change ownership.

Resolution carries out the prepared play. For a spell or ordinary ability, follow instructions in order, recheck targets, and make choices reserved for this stage. A resolving spell normally finishes in its owner’s Trash.

Players cannot insert an ordinary Reaction between those instructions. Being allowed to react to a spell does not let you interrupt its resolution.

| Question | Finalization | Resolution |
| --- | --- | --- |
| Which unit does Void Seeker target? | Select it. | Recheck whether it is still a legal target. |
| When do you pay the spell’s cost? | Before ordinary responses. | Already paid. |
| When do its damage and draw happen? | Still waiting. | Carry out the applicable instructions. |

See the [worked Void Seeker case](/advanced/costs-targets-and-choices#what-if-the-target-changes).

[Core Rules: ownership, 127.1](/reference/core-rules#rule-127-1), [340.1](/reference/core-rules#rule-340-1), [359.3](/reference/core-rules#rule-359-3), [407.5](/reference/core-rules#rule-407-5).

## Why a unit is different

Units and gear are **permanents**: they remain on the board after being played. They resolve immediately after finalization, entering the board before the ordinary spell-style response opportunity.

A **play effect** is a triggered ability caused by playing the card, such as “When you play me, draw 1.” It becomes a separate ability item. Players may respond to that ability after its own preparation.

An Add ability also resolves immediately after finalization. A spell that generates resources follows the ordinary spell procedure instead.

[Core Rules: 337.2](/reference/core-rules#rule-337-2), [355.5.b](/reference/core-rules#rule-355-5-b), [359.2](/reference/core-rules#rule-359-2), [430.2](/reference/core-rules#rule-430-2).

Riot’s Chronobreak example uses several pending units. Process their preparation and immediate entry in arrival order. Their play effects wait for their own preparation; those abilities are separate from the units entering.

[Radiance patch notes][patch], “Chronobreak,” effective October 16, 2026.

## Follow the procedure

A **task** is a required step or procedure that must be handled before play continues. **Outstanding** means it is still waiting to be done.

**Cleanup** is a required series of game-state checks, such as checking whether a unit’s recorded damage reaches its Might. It can create further required tasks before players act again.

Riot calls the overall process **HOT FEPR**: Handle Outstanding Tasks; then Finalize, Execute, Pass, Resolve.

1. Handle required tasks, including cleanup when instructed.
2. Finalize the oldest pending item.
3. If it is a unit, gear, or Add ability, resolve it immediately. Otherwise, continue preparing remaining pending items.
4. Once pending items are processed, give Priority to the controller of the next item to resolve. Players can play permitted Reactions or pass.
5. After both players pass in sequence, resolve the newest finalized item completely. Check for tasks and pending items again before continuing.

[Core Rules: 318](/reference/core-rules#rule-318)–[324](/reference/core-rules#rule-324), [332](/reference/core-rules#rule-332)–[340](/reference/core-rules#rule-340).

## Example: two spells

Assume spell A and Reaction spell B are legal, no additional abilities trigger, and only ordinary cleanup is needed.

| Step | Chain, oldest → newest | What happens |
| --- | --- | --- |
| You begin playing A | A, pending | This creates the chain. Make choices, pay, and finalize A. |
| You pass Priority | A, finalized | Your opponent gets an opportunity to act. |
| Opponent plays B | A → B | Prepare B. The opponent then receives Priority and passes; you also pass. |
| B resolves | A remains | Finish all of B’s instructions and resulting tasks. |
| Both players pass again | A | You receive Priority first. After both passes, A resolves. |
| A finishes | Empty | The chain ceases to exist. |

An ability triggered while B resolves can become pending, but its preparation waits until B finishes. Passing once does not approve the resolution of every remaining item.

[Core Rules: 334](/reference/core-rules#rule-334), [337](/reference/core-rules#rule-337)–[340](/reference/core-rules#rule-340), [354.3](/reference/core-rules#rule-354-3).

## A payment can belong to resolution

Some payments appear inside an effect’s instructions. Their placement determines whether they are part of preparing the play or happen while carrying out the effect. The [triggers lesson](/advanced/triggers#optional-instructions-and-conditions) gives a named example.

[Core Rules: 204.3](/reference/core-rules#rule-204-3), [383.3.b](/reference/core-rules#rule-383-3-b).

## Source record

[Core Rules][core], October 9, 2026 edition: chain creation, preparation, responses, and resolution at the numbered references above.

[Radiance patch notes][patch], effective October 16, 2026: “Chronobreak” and “Pending Item Target Legality.” Checked with the [Rules Hub][hub] November 21, 2026.

[Previous: Build your first deck](/basics/build-your-first-deck) · [Next: Timing and reaction opportunities](/advanced/timing-and-reactions)

[core]: /reference/core-rules
[hub]: https://playriftbound.com/en-us/rules-hub/
[patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
