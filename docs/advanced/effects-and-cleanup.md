# Effects, exceptions, and cleanup

::: warning Draft — awaiting review
For two-player Duel. Sources checked November 14, 2026.
:::

## How do several effects fit together?

First identify the procedure each instruction changes. Card text can override the ordinary rules, while a prohibition takes precedence over permission to perform the same action. Perform the possible parts of an effect, but observe the special rules for illegal targets and linked instructions. ([Core Rules][core], 002; 054–055; 359.3.e.)

## Impossible and illegal are different

An instruction with an illegal target, or unavailable required information, is **ignored**. An instruction that fails for another reason, including replacement or impossibility, is **negated**. Ignoring an instruction also suppresses later instructions linked to it; negating it does not automatically suppress those linked instructions. ([Core Rules][core], 359.3.e; [Radiance patch notes][patch], “Negated and Ignored Instructions.”)

Do not turn this into a rule that every later sentence fails. Establish whether the later instruction is actually linked to the failed instruction. The independent draw in the [Void Seeker example](/advanced/costs-targets-and-choices#what-if-the-target-changes) still happens.

## Use layers for ongoing modifications

The current layer order is copy effects, trait changes, ability changes, then arithmetic changes. Evaluate dependencies and repeat the layer calculation as required until the state is stable. A later effect is not automatically the winner merely because it happened last. ([Core Rules][core], 475–481; [Radiance patch notes][patch], “Copy Effects Layer” and “Layer Calculations and Object Dependencies.”)

For a complex Might question, record the base or copied traits, changed abilities, increases, decreases, and durations before calculating. This makes it possible to check each modifier against its own rule.

## Cleanup is part of play

Cleanup handles game-state checks after specified events, including lethal damage and relevant control changes. It cannot run halfway through an ordinary resolving chain item. Triggered abilities can become pending during cleanup, but finalization and resolution wait. Repeat cleanup when its changes require another cleanup. ([Core Rules][core], 318–324.)

Combat and ending cleanups insert special steps. The Ending Phase heals units and expires turn-long effects in the specified order; combat cleanup also heals survivors and may recall attackers. Use those procedures instead of removing all damage after every spell. ([Core Rules][core], 317.2; 468.1.)

## Source record

[Riftbound Core Rules][core], updated October 9, 2026, rules cited above; [Radiance patch notes][patch], effective October 16, sections named above. Checked with the [Rules Hub][hub] November 14, 2026.

[Previous: Triggers](/advanced/triggers) · [Next: Combat and scoring edge cases](/advanced/combat-and-scoring)

[core]: https://cmsassets.rgpub.io/sanity/files/dsfx7636/news_live/5c7946f7c3b8c6e0faff85ab6dadc6d2e721ea94.pdf
[hub]: https://playriftbound.com/en-us/rules-hub/
[patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
