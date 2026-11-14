# Triggers

::: warning Draft — awaiting review
For two-player Duel. Sources checked November 14, 2026.
:::

## When does a triggered ability happen?

A **triggered ability** has a condition and an effect. Look for wording about when an event happens, a specified time, or the first or another numbered occurrence of an event. Meeting the condition puts an ability on the chain; it does not automatically finish that ability's instructions. ([Core Rules][core], 382–383.3.)

## Separate triggering from resolving

1. Perform the event and evaluate the condition. Most conditions examine the state after the event. Abilities triggered by their own source leaving the board use special handling immediately before it leaves.
2. Add the triggered ability as a pending item. If another effect is resolving, finish that effect first.
3. Finalize the ability at the appropriate time: make its choices, handle any costs, and check legality.
4. Allow reactions to the finalized ability, then resolve it through the chain procedure.

Replacement effects can change whether the event happens at all. A death replaced by healing and recall does not cause a death trigger. ([Core Rules][core], 383.2.c–383.3; 334; 354.3; 808.1.d.)

## Multiple triggers

For genuinely simultaneous triggers, each player orders the abilities they control. Put players' groups on the chain in turn order, starting with the turn player. Triggers from different events retain their event sequence. ([Core Rules][core], 303.2.a; 383.3.d.)

**Practice example:** In a Duel outside combat, one event simultaneously triggers your abilities A and B and the opponent's C. It is your turn. You choose A then B; the opponent adds C. Assuming no costs, extra triggers, or responses change the sequence, finalization processes A, B, C, while resolution runs C, B, A. Apply the [chain procedure](/advanced/chains-and-resolution) between each item.

Combat has a specific opening order: attacker triggers first, then any other non-defender players in turn order, then defender triggers. Follow that rule for the initial combat chain. ([Core Rules][core], 466.2.d.)

## Optional instructions and conditions

A “may” at the start of a trigger's effect is decided during finalization; a later optional instruction is decided during resolution. A conditional clause immediately following the trigger condition belongs to that condition. Read its position carefully rather than automatically checking every condition twice. ([Core Rules][core], 383.2.a; 383.3.a–383.3.b.)

## Source record

[Riftbound Core Rules][core], updated October 9, 2026, rules cited above; [Core Rules patch notes][origins], October 24, 2025, “Triggered Ability Updates” and “The Steps of Combat”; [Radiance FAQ][faq], October 26, 2026, Riven, Broken Blade's buff-payment question. Checked with the [Rules Hub][hub] November 14, 2026; the current Core Rules govern the procedures here.

[Previous: Costs, targets, and choices](/advanced/costs-targets-and-choices) · [Next: Effects, exceptions, and cleanup](/advanced/effects-and-cleanup)

[core]: https://cmsassets.rgpub.io/sanity/files/dsfx7636/news_live/5c7946f7c3b8c6e0faff85ab6dadc6d2e721ea94.pdf
[hub]: https://playriftbound.com/en-us/rules-hub/
[origins]: https://playriftbound.com/en-us/news/rules-and-releases/riftbound-core-rules-patch-notes/
[faq]: https://playriftbound.com/en-us/news/organizedplay/radiance-rules-faq-and-clarifications/
