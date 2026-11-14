# Timing and reaction opportunities

::: warning Draft — awaiting review
For two-player Duel. Sources checked November 14, 2026.
:::

## Can I act right now?

You now know what [finalization and resolution](/advanced/chains-and-resolution) do. This article explains the opportunities between them. **Action** permits play during an open showdown; **Reaction** includes that permission and also permits play during a closed state. The [later mechanics article](/advanced/mechanics-and-keywords) applies these permissions to Hidden and other card text. ([Core Rules][core], 806; 813.)

Check the game state and who has **Priority**, the exclusive permission to take a discretionary action. A card having Reaction does not let you interrupt an instruction while another effect resolves. ([Core Rules][core], 303.1; 307–313; 340.1.)

| State | What is happening? | Ordinary permission |
| --- | --- | --- |
| Neutral Open | No showdown or combat; no chain | The turn player acts during their Main Phase. |
| Neutral Closed | A chain exists outside a showdown | The player with Priority may play a legally timed Reaction. |
| Showdown Open | A showdown is underway; no chain | The player with Focus and Priority may play an Action or Reaction. |
| Showdown Closed | A chain exists during a showdown | The player with Priority may play a legally timed Reaction. |

These are the default permissions; card text may create an exception. ([Core Rules][core], 308–313; 338; 806; 813.)

## Priority and Focus are different

**Focus** identifies whose opportunity it is to start a play in an open showdown. Receiving Focus also gives Priority. Passing Priority during a chain does not pass Focus. ([Core Rules][core], 312–313.)

After pending items have been finalized, the controller of the next item to resolve receives Priority. They may add a Reaction themselves or pass. If both players pass in sequence without adding an item, the newest finalized item resolves. Check the chain again afterward; passing once does not approve every remaining item. ([Core Rules][core], 337–340.)

## Example: an Action during combat

You have Focus in an open combat showdown and play an Action spell. Your opponent cannot answer it with a card that has only Action: the chain has closed the state. They can play a legal Reaction when they receive Priority.

Once that chain empties, Focus normally moves to the other player. A chain started by a triggered ability or an Add ability does not cause that Focus change. If both players instead pass Focus in sequence without playing anything, the showdown ends. ([Core Rules][core], 340.2; 345–348.)

Abilities that Add resources have special processing, including certain opportunities to pay costs. Follow those exceptions rather than treating them as ordinary reaction windows. ([Core Rules][core], 430.2–430.3.)

## Source record

[Riftbound Core Rules][core], updated October 9, 2026, rules cited above; [Rules Hub][hub] and [Radiance patch notes][patch], effective October 16, checked November 14, 2026.

[Previous: Chains and resolution](/advanced/chains-and-resolution) · [Next: Costs, targets, and choices](/advanced/costs-targets-and-choices)

[core]: https://cmsassets.rgpub.io/sanity/files/dsfx7636/news_live/5c7946f7c3b8c6e0faff85ab6dadc6d2e721ea94.pdf
[hub]: https://playriftbound.com/en-us/rules-hub/
[patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
