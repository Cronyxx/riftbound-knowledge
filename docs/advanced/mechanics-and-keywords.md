# Mechanics and keywords

::: warning Draft — awaiting review
For two-player Duel. Sources and terminology checked November 21, 2026. This first mechanics batch covers Action, Reaction, Hidden, and buffs.
:::

## What does a keyword let you do?

A **keyword** is shorthand for a longer ability or instruction. The table below summarizes four terms; the following examples explain how to apply them.

The **chain** is the temporary zone holding plays. An **open** state has no chain; a **closed** state has one. A **showdown** is a structured opportunity for players to take turns playing appropriately timed cards and abilities.

An open showdown has no chain yet. A **Neutral Open** state has neither a chain nor a showdown or combat in progress. The [timing lesson](/advanced/timing-and-reactions) explains when each player may act.

Keywords can grant permission, change a procedure, or refer to a game object. Read the keyword together with the rest of the card: timing permission does not waive costs or targeting requirements.

For individual mechanic references, visit the [Mechanics section](/mechanics/). The [Hidden study](/mechanics/hidden) expands the introduction below with a worked example, targeting and control edge cases, and dated rules changes and card errata.

It is a separate draft checked November 20, 2026.

| Term | How to use it | Reference |
| --- | --- | --- |
| Action | Play the card or activate that ability during an open showdown on either player's turn, as well as at its ordinary timing. It does not permit a response to an existing chain. | [Core Rules][core], [806](/reference/core-rules#rule-806); [308](/reference/core-rules#rule-308)–[310](/reference/core-rules#rule-310) |
| Reaction | Includes Action's permissions and allows play during a closed state, when a chain exists. You still need an opportunity to act. | [Core Rules][core], [813](/reference/core-rules#rule-813); [312](/reference/core-rules#rule-312) |
| Hidden | Permits hiding the card now and playing it from facedown starting next turn. Hiding and playing are separate actions. | [Core Rules][core], [811](/reference/core-rules#rule-811) |
| Buff | A counter that normally adds 1 Might. A unit normally has at most one buff; another instruction to buff it does not add a second. | [Core Rules][core], [701](/reference/core-rules#rule-701)–[705](/reference/core-rules#rule-705) |

## Hiding a card, then playing it

A card’s **base cost** is its printed or copied Energy and Power cost before changes to the play. **Additional costs** are payments or actions added to it. Ignoring the base cost does not remove those additional costs.

On your turn in a Neutral Open state, pay one Power of any domain to hide a card with Hidden from your hand or Champion Zone at a battlefield you control with an available facedown space. Hiding does not start a chain.

Beginning next turn, the hidden card gains Reaction and can be played ignoring its base cost. Additional costs still matter. ([Core Rules][core], [422](/reference/core-rules#rule-422); [811.1](/reference/core-rules#rule-811-1); [356](/reference/core-rules#rule-356)–[357](/reference/core-rules#rule-357).)

A **permanent**, such as a unit or gear, stays on the board after being played. Its **play effect** is an ability triggered by playing it. A **target** is something specifically selected for an effect.

A hidden permanent normally enters at that battlefield. Targets of a spell played from facedown, and of a hidden permanent's play effect, normally come from that battlefield.

Explicit targeting restrictions can create exceptions; evaluate each target separately. Losing control removes your facedown cards there during cleanup. ([Core Rules][core], [811.1.d](/reference/core-rules#rule-811-1-d)–[811.2](/reference/core-rules#rule-811-2); [323.6.a](/reference/core-rules#rule-323-6-a).)

## Practice the distinction

You hide a card on your turn. You cannot immediately play it using Hidden's next-turn permission. On the opponent's turn, check the battlefield, legal targets, additional costs, and your reaction opportunity before revealing and playing it.

A **counter** here is a marker on a unit. It differs from the **Counter action**, which stops a spell or ability. A temporary Might increase is not automatically a buff counter. Track the counter separately from effects that last this turn.

([Core Rules][core], [701](/reference/core-rules#rule-701)–[705](/reference/core-rules#rule-705); [479.4](/reference/core-rules#rule-479-4).)

## Source record

[Riftbound Core Rules][core], updated October 9, 2026; sections cited above. [Rules Hub][hub], [Radiance patch notes][patch] (effective October 16), and [Radiance errata][errata] (October 9) checked November 21, 2026. Use corrected card text when applying Hidden to individual cards.

[Previous: Negated vs ignored](/advanced/negated-vs-ignored) · [Next: Combat and scoring edge cases](/advanced/combat-and-scoring)

[core]: /reference/core-rules
[hub]: https://playriftbound.com/en-us/rules-hub/
[patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
[errata]: https://playriftbound.com/en-us/news/announcements/radiance-errata-updates/
