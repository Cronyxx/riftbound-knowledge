# Effects, exceptions, and cleanup

::: warning Draft — awaiting review
For two-player Duel. Sources checked November 15, 2026. Examples with unnamed units and effects are illustrative situations, not printed card text. Assume no other relevant effects.
:::

## How do several effects fit together?

First identify the procedure each instruction changes. Card text can override the ordinary rules, while a prohibition takes precedence over permission to perform the same action. Perform the possible parts of an effect, but observe the special rules for illegal targets and linked instructions. ([Core Rules][core], [002](/reference/core-rules#rule-002); [054](/reference/core-rules#rule-054)–[055](/reference/core-rules#rule-055); [359.3.e](/reference/core-rules#rule-359-3-e).)

## Impossible and illegal are different

An instruction with an illegal target, or unavailable required information, is **ignored**. An instruction that fails for another reason, including replacement or impossibility, is **negated**. Ignoring an instruction also suppresses later instructions linked to it; negating it does not automatically suppress those linked instructions. ([Core Rules][core], [359.3.e](/reference/core-rules#rule-359-3-e); [Radiance patch notes][patch], “Negated and Ignored Instructions.”)

Do not turn this into a rule that every later sentence fails. Establish whether the later instruction is actually linked to the failed instruction. The independent draw in the [Void Seeker example](/advanced/costs-targets-and-choices#what-if-the-target-changes) still happens.

## Use layers for ongoing modifications

The current layer order is copy effects, trait changes, ability changes, then arithmetic changes. Evaluate dependencies and repeat the layer calculation as required until the state is stable. A later effect is not automatically the winner merely because it happened last. ([Core Rules][core], [475](/reference/core-rules#rule-475)–[481](/reference/core-rules#rule-481); [Radiance patch notes][patch], “Copy Effects Layer” and “Layer Calculations and Object Dependencies.”)

For a complex Might question, record the base or copied traits, changed abilities, increases, decreases, and durations before calculating. This makes it possible to check each modifier against its own rule.

### What each layer changes

An **ongoing modification** continues affecting an object after the effect that created it has resolved, or while a passive ability applies. Layers determine the object's current characteristics; they do not reopen the chain to replay the original effect.

| Layer | Question to ask |
| --- | --- |
| 1 · Copy | Which printed or copied characteristics are the starting point? |
| 2 · Traits | Has its type, tag, controller, or base Might changed? |
| 3 · Abilities | Which abilities has it gained or lost? |
| 4 · Arithmetic | Which increases and decreases modify its values? |

The Radiance update separates copy effects from later changes. A subsequently granted tag, for example, is not automatically part of what another copy receives. ([Radiance patch notes][patch], “Copy Effects Layer.”)

### Example: a bonus that depends on location

An illustrative passive ability gives other friendly units at its battlefield +1 Might. A unit there has 3 printed Might and a separate +2 Might effect lasting this turn.

| Current situation | Calculation | Might |
| --- | --- | --- |
| At the battlefield, both effects apply | 3 + 1 + 2 | 6 |
| It moves to base; the battlefield bonus stops applying | 3 + 2 | 5 |
| The turn-long increase expires | 3 | 3 |

Reassess which effects apply when the situation changes. Do not keep the battlefield bonus simply because the unit received it earlier. This illustrates continuous evaluation; dependencies on another object's characteristics require evaluating that object too. ([Core Rules][core], [478.1](/reference/core-rules#rule-478-1); [479.4](/reference/core-rules#rule-479-4); [Radiance patch notes][patch], “Layer Calculations and Object Dependencies.”)

### Example: a limited reduction keeps its value

A 2 Might unit receives a turn-long reduction of 4, limited to a minimum of 1. The applied reduction is **−1**, snapshotted when it applies. A later +3 effect produces **2 + 3 − 1 = 4 Might**. Do not recalculate that earlier reduction as −4. Passive effects do not use this snapshot rule. ([Core Rules][core], [479.4.b](/reference/core-rules#rule-479-4-b); [479.4.e](/reference/core-rules#rule-479-4-e).)

### Example: two arithmetic effects depend on each other

A 4 Might unit has a passive effect raising its Might to 5, plus a separate +2 increase. Apply +2 first: the unit reaches 6, so the passive adds 0. The result is **6**, not 7. The passive depends on the increase because that increase changes how much the passive adds. ([Core Rules][core], [480](/reference/core-rules#rule-480)–[481.2](/reference/core-rules#rule-481-2), worked example.)

## Cleanup is part of play

Cleanup handles game-state checks after specified events, including lethal damage and relevant control changes. It cannot run halfway through an ordinary resolving chain item. Triggered abilities can become pending during cleanup, but finalization and resolution wait. Repeat cleanup when its changes require another cleanup. ([Core Rules][core], [318](/reference/core-rules#rule-318)–[324](/reference/core-rules#rule-324).)

Combat and ending cleanups insert special steps. The Ending Phase heals units and expires turn-long effects in the specified order; combat cleanup also heals survivors and may recall attackers. Use those procedures instead of removing all damage after every spell. ([Core Rules][core], [317.2](/reference/core-rules#rule-317-2); [468.1](/reference/core-rules#rule-468-1).)

### Why cleanup can repeat

Cleanup is a required game procedure, not an action a player chooses. If correcting the board creates another change that needs checking, run another ordinary cleanup before continuing. New triggers can wait on the chain while those checks finish. A special cleanup adds steps for a particular occasion; a required repeat uses ordinary cleanup rather than repeating all its special steps. ([Core Rules][core], [319](/reference/core-rules#rule-319)–[324](/reference/core-rules#rule-324); [Core Rules patch notes][origins], “Cleanups.”)

### Example: losing an ongoing bonus causes another death

Outside combat in an open state, a 3 Might unit has 4 damage marked but survives because another unit's passive ability gives it +2 Might. That source also has lethal damage. Neither unit has a relevant replacement effect or death trigger.

1. Cleanup kills the source. The other unit was at 5 Might and did not have lethal damage when that check was made.
2. Losing the source removes its ongoing +2. The surviving unit is now at 3 Might with 4 damage.
3. The changed board requires another cleanup. That check kills the second unit.

This applies the repeating-cleanup procedure to an ongoing modifier. Recalculate after the source leaves; do not retain its bonus or allow an ordinary response between these required checks. ([Core Rules][core], [320](/reference/core-rules#rule-320)–[323.4](/reference/core-rules#rule-323-4); [478.1](/reference/core-rules#rule-478-1); [Core Rules patch notes][origins], “Cleanups.”)

### Example: damage and an expiring increase

A unit has 3 printed Might, +2 this turn, and 4 damage marked. It survives ordinary cleanup at 5 Might. In the Ending Special Cleanup, units heal **before** turn-long effects expire. With damage removed, it safely returns to 3 Might. Ordinary cleanup would not have healed it. ([Core Rules][core], [317.2.b](/reference/core-rules#rule-317-2-b)–[317.2.c](/reference/core-rules#rule-317-2-c); [323.4](/reference/core-rules#rule-323-4).)

For a new situation, record current Might, marked damage, each modifier's duration, and whether the cleanup is ordinary, combat, or ending. Then follow the relevant ordered procedure.

## Source record

[Riftbound Core Rules][core], updated October 9, 2026, rules cited above; [Radiance patch notes][patch], effective October 16, sections named above; [Core Rules patch notes][origins], October 24, 2025, “Cleanups,” for the introduction of repeated and special cleanups. Procedures and illustrative outcomes were checked against the current Core Rules. The [Rules Hub][hub], these documents, and the [Radiance FAQ][faq], October 26, were checked November 15, 2026.

[Previous: Triggers](/advanced/triggers) · [Next: Mechanics and keywords](/advanced/mechanics-and-keywords)

[core]: /reference/core-rules
[hub]: https://playriftbound.com/en-us/rules-hub/
[patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
[origins]: https://playriftbound.com/en-us/news/rules-and-releases/riftbound-core-rules-patch-notes/
[faq]: https://playriftbound.com/en-us/news/organizedplay/radiance-rules-faq-and-clarifications/
