# Triggers

::: warning Draft — awaiting review
For two-player Duel. Sources and terminology checked November 21, 2026.
:::

## When does a triggered ability happen?

An **ability** is a rule or capability of a card. A **triggered ability** waits for a stated **condition**: an event or time that must occur. Its **effect** is the set of instructions it will carry out.

**Triggering** means that condition has been met and the ability is added to the **chain**, the temporary zone holding plays. Its instructions still wait for preparation and resolution.

Look for wording such as “when” an event happens, “at” a time, or “the first time” something happens. The identifying words do not have to start the sentence.

[Core Rules: 382](/reference/core-rules#rule-382)–[383.3](/reference/core-rules#rule-383-3).

## Separate triggering from resolving

An ability’s **source** is the card or other game piece it comes from. A **play effect** is a triggered ability caused by playing its card, such as “When you play me, draw 1.”

A **pending item** is an item waiting for preparation. **Finalization** prepares its choices and costs; **resolution** carries out its instructions. See the [chain procedure](/advanced/chains-and-resolution) for the complete sequence.

1. Perform the event and evaluate the condition. Most conditions examine the state after the event. Abilities caused by their source leaving the board use special handling immediately before it leaves.
2. Add the triggered ability as a pending item. If another effect is resolving, finish that effect first.
3. Finalize the ability: make its choices, handle any costs, and check whether the play is allowed.
4. Give players their appropriate response opportunities, then resolve the ability through the chain procedure.

[Core Rules: 383.2.c](/reference/core-rules#rule-383-2-c)–[383.3](/reference/core-rules#rule-383-3), [354.3](/reference/core-rules#rule-354-3), [355.5.b](/reference/core-rules#rule-355-5-b).

### What if the event is replaced?

A **replacement effect** changes an event into another event, often using “instead.” If it prevents the original event from happening, an ability waiting for that original event does not trigger.

For example, an effect can replace a unit’s death with healing and recall. **Heal** removes damage; **recall** sends the unit to base without performing a move. Because it did not die, its death-triggered ability does not trigger.

[Core Rules: 367](/reference/core-rules#rule-367)–[374](/reference/core-rules#rule-374), [383.2.c](/reference/core-rules#rule-383-2-c), [808.1.d](/reference/core-rules#rule-808-1-d).

## Multiple triggers

The **turn player** is the player whose turn it is. **Turn order** is the sequence in which players take turns. An ability’s **controller** is the player directing its choices.

When one event triggers several abilities simultaneously, each player orders the abilities they control. Add players’ groups in turn order, starting with the turn player. Abilities caused by different events keep their event order.

[Core Rules: 303.2.a](/reference/core-rules#rule-303-2-a), [383.3.d](/reference/core-rules#rule-383-3-d).

**Practice example:** Outside combat in your Duel turn, one event triggers your abilities A and B and your opponent’s C. You choose A then B; the opponent adds C.

Assuming no extra costs, triggers, or responses change the sequence, preparation runs A, B, C. Resolution runs C, B, A. Use the [chain procedure](/advanced/chains-and-resolution) between items.

In ordinary Duel combat, arriving units become **attackers** and the opposing units become **defenders**. The initial combat chain adds attacker-triggered abilities before defender-triggered abilities.

For games with more players, the combat rule inserts other non-defender players in turn order between those groups.

[Core Rules: 466.2.c](/reference/core-rules#rule-466-2-c)–[466.2.d](/reference/core-rules#rule-466-2-d).

## Optional instructions and conditions

A **mode** is one of the listed options an ability tells you to choose. A **cost within instructions** is a payment written as part of its effect, rather than separately before a colon.

When “you may” begins a triggered ability’s effect, decide during finalization. A later optional instruction is decided during resolution. A condition immediately following the trigger event belongs to the trigger condition.

A payment at the start of the effect can be treated as its base cost. A payment appearing later in its instructions is handled during resolution. Read the position of the words before deciding when to pay.

[Core Rules: 383.2.a](/reference/core-rules#rule-383-2-a), [383.3.a](/reference/core-rules#rule-383-3-a)–[383.3.b](/reference/core-rules#rule-383-3-b).

A **buff** is a counter—a marker on a unit—that normally adds 1 Might. In Riot’s Riven, Broken Blade case, a mode is chosen first; spending the buff is a later instruction, so the buff payment happens during resolution.

[Core Rules: 701](/reference/core-rules#rule-701)–[705](/reference/core-rules#rule-705). [Radiance FAQ][faq], Riven’s buff-payment question.

## Source record

[Core Rules][core], October 9, 2026 edition: triggered abilities, source information, ordering, and choices at the references above.

[Origins patch notes][origins], October 24, 2025, “Triggered Ability Updates” and “The Steps of Combat”; [Radiance FAQ][faq], October 26, 2026, Riven’s buff-payment question.

Checked with the [Rules Hub][hub] November 21, 2026. The current Core Rules govern the procedures here.

[Previous: Costs, targets, and choices](/advanced/costs-targets-and-choices) · [Next: Effects, exceptions, and cleanup](/advanced/effects-and-cleanup)

[core]: /reference/core-rules
[hub]: https://playriftbound.com/en-us/rules-hub/
[origins]: https://playriftbound.com/en-us/news/rules-and-releases/riftbound-core-rules-patch-notes/
[faq]: https://playriftbound.com/en-us/news/organizedplay/radiance-rules-faq-and-clarifications/
