# Combat and scoring edge cases

::: warning Draft — awaiting review
For two-player Duel with two battlefields and Victory Score 8. Sources checked November 14, 2026. Team and multiplayer scoring use additional rules.
:::

## When is combat damage dealt?

The combat showdown happens before the damage step. Once it closes, use current Might. The attacker assigns damage first, then the defender; damage is dealt simultaneously after assignment. You must assign lethal damage to a unit before moving on to another, while respecting applicable assignment requirements and replacement effects. There is no ordinary reaction window between assignment and dealing damage. ([Core Rules][core], [466](/reference/core-rules#rule-466)–[467](/reference/core-rules#rule-467).)

**Example:** With no relevant abilities, statuses, damage modifiers, or previously marked damage, an attacking side with 6 total Might assigns damage against two 4 Might defenders. Assign 4 to one and 2 to the other; splitting 3 and 3 is not legal. The defenders still deal their full combat damage simultaneously.

## Surviving does not always mean conquering

Combat cleanup kills lethally damaged units, heals survivors, and recalls attackers if defenders remain. Determine the combat result, process its resulting items, then establish control at the specified step. If nobody remains, the battlefield becomes uncontrolled. If attackers were recalled, combat has No Result; do not award a point simply for dealing damage. ([Core Rules][core], [468.1](/reference/core-rules#rule-468-1)–[468.5](/reference/core-rules#rule-468-5).)

## Scoring and gaining a point are separate

Conquer and Hold are ways to score a battlefield. Each player can score each battlefield only once per turn, combining both methods. Losing and retaking the same battlefield does not reset that limit. ([Core Rules][core], [469](/reference/core-rules#rule-469)–[473](/reference/core-rules#rule-473).)

At 7 or more points in Duel, a Conquer awards a point only if you have scored every battlefield that turn. Otherwise you draw a card. That battlefield still scored, and its applicable Conquer abilities trigger. This restriction does not apply to Hold or other non-Conquer point sources. ([Core Rules][core], [470](/reference/core-rules#rule-470); [473](/reference/core-rules#rule-473).)

| Situation, with no other point-changing effects | Result |
| --- | --- |
| At 7, conquer A without having scored B this turn | Draw a card; remain at 7. |
| Then conquer B for its first score by you this turn | Both battlefields have scored; gain the eighth point. |
| At 7, hold A in your Beginning Phase | Gain the eighth point without needing to score B. |
| Score A, lose it, then retake A in the same turn | No second score from A that turn. |

These outcomes apply the Duel rules to the stated examples. Victory is checked during cleanup: you need at least 8 points and more points than your opponent. ([Core Rules][core], [323.1](/reference/core-rules#rule-323-1); [474](/reference/core-rules#rule-474); [487.3](/reference/core-rules#rule-487-3)–[487.4](/reference/core-rules#rule-487-4).)

## Source record

[Riftbound Core Rules][core], updated October 9, 2026, rules cited above; [Radiance patch notes][patch], effective October 16, “2v2 Scoring” checked to distinguish team rules from these Duel examples. [Rules Hub][hub] checked November 14, 2026.

[Previous: Mechanics and keywords](/advanced/mechanics-and-keywords) · [Next: Special card interactions](/advanced/special-card-interactions)

[core]: /reference/core-rules
[hub]: https://playriftbound.com/en-us/rules-hub/
[patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
