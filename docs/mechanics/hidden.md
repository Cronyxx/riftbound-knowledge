---
title: Hidden — procedure, edge cases, and errata
description: How to hide and play Riftbound cards, handle battlefield targeting and control, and apply dated Hidden rules changes and card errata.
---

# Hidden

::: warning Draft — awaiting review
**Format:** two-player Duel. **Sources checked:** November 20, 2026. **Core Rules edition:** October 9, 2026, with applicable official updates. The historical changes below are a selected record of relevant changes, not an exhaustive card-errata catalogue.
:::

**Hidden** lets you prepare a card facedown at a battlefield you control, then play it on a later turn with Reaction timing while ignoring its base cost. It appears on spells, units, and gear. **Hide** is the action of placing the card facedown; hiding it and playing it are separate actions. ([811.1](/reference/core-rules#rule-811-1)–[811.1.c.3](/reference/core-rules#rule-811-1-c-3))

This study assumes the [chain and timing vocabulary](/advanced/timing-and-reactions). In particular, **Priority** is permission to act at the appropriate opportunity; gaining Reaction does not let you interrupt another effect’s instructions. ([312](/reference/core-rules#rule-312), [340.1](/reference/core-rules#rule-340-1), [813](/reference/core-rules#rule-813))

## How Hidden works

### 1. Hide the card

On your turn, during a **Neutral Open** state—outside a showdown and with no chain—choose a card with Hidden from your hand or Champion Zone. Pay **one Power of any domain**, represented by `[A]`, and put it facedown at a battlefield you control that does not already have a card hidden there. Its facedown zone normally holds one card. Hiding does not play the card or start a chain. ([411.1.a](/reference/core-rules#rule-411-1-a), [422](/reference/core-rules#rule-422), [811.1.b](/reference/core-rules#rule-811-1-b)–[811.1.c.2](/reference/core-rules#rule-811-1-c-2), [107.3.b](/reference/core-rules#rule-107-3-b)–[107.3.c](/reference/core-rules#rule-107-3-c))

### 2. Wait until a later turn

Hidden’s play permission starts **on the next turn**, including an opponent’s turn. It does not require waiting until your next turn, and it does not expire at the end of that next turn. The card can remain prepared while you maintain control of its battlefield. From the next turn, it gains Reaction while facedown or played from facedown. Hidden’s own permission does not let you play it on the turn you hid it. ([811.1.b][hidden-permission], [811.6](/reference/core-rules#rule-811-6)–[811.6.a](/reference/core-rules#rule-811-6-a))

### 3. Play the card

At a legal Reaction opportunity, play it from facedown. Check its battlefield restrictions and targets, determine costs, and finalize the play. Hidden sets the base Energy and Power costs to zero; additional costs and later cost increases still apply. A hidden permanent—normally a unit or gear—must enter at its associated battlefield unless another effect permits otherwise. A spell follows its instructions and normally goes to its owner’s Trash after resolution. ([811.1.c.3](/reference/core-rules#rule-811-1-c-3)–[811.1.d.1.a](/reference/core-rules#rule-811-1-d-1-a), [356.1.b](/reference/core-rules#rule-356-1-b)–[356.2](/reference/core-rules#rule-356-2), [359.3.d](/reference/core-rules#rule-359-3-d))

| Question | When hiding | When playing from facedown |
| --- | --- | --- |
| When can I do it? | Your turn, Neutral Open state. | Starting next turn, at a legal Reaction opportunity. |
| What do I pay? | One Power of any domain. | Ignore base costs; handle additional costs and cost increases. |
| Does it create a chain? | No. | Yes; the ordinary play procedure applies. |
| When do I choose a spell’s targets? | Not as part of hiding it. | During finalization, under Hidden’s targeting restrictions. |

You may instead play a card with Hidden normally, paying its normal cost at its normal timing. That does not apply the restrictions associated with playing it from facedown. ([355](/reference/core-rules#rule-355), [811.3](/reference/core-rules#rule-811-3))

## Worked example: Blastcone Fae

Assume you control Battlefield A, its facedown space is empty, and no other effects change costs, timing, or targeting.

1. On your turn in a Neutral Open state, pay one Power of any domain to hide **Blastcone Fae** at A. Its play effect does not trigger: you have hidden it, not played it.
2. On your opponent’s turn, you receive Priority during a showdown at A. You still control A. Play the Fae from facedown, ignoring its base cost.
3. The Fae enters at A. Its play-triggered ability is a separate chain item. When finalizing that ability, choose a unit at A to receive its temporary Might reduction, which cannot reduce that unit below 1 Might.

Players can react to the finalized play-triggered ability; the unit’s entry and that ability’s resolution are separate events. The Fae’s battlefield targeting is an explicit rulebook example. ([811.1.d.3](/reference/core-rules#rule-811-1-d-3), [337.2](/reference/core-rules#rule-337-2), [355.5.b](/reference/core-rules#rule-355-5-b), [359.2](/reference/core-rules#rule-359-2))

## Edge cases

### What if I lose control of the battlefield?

At the next applicable cleanup, facedown cards at a battlefield you no longer control go to their owners’ Trash. Reveal the card when it changes zones. It is not played and its ordinary play effect does not happen. ([107.3.d](/reference/core-rules#rule-107-3-d), [323.6.a](/reference/core-rules#rule-323-6-a), [422.4](/reference/core-rules#rule-422-4))

An opponent arriving does not immediately take control from you: during a combat or showdown, control remains locked until its procedure instructs otherwise. This can let you play a previously hidden card during the fight. Conversely, moving your last unit away outside combat or a showdown can cause loss of control in cleanup. You cannot take a discretionary action in the middle of that cleanup to rescue the card. ([190.4.b](/reference/core-rules#rule-190-4-b)–[190.4.c](/reference/core-rules#rule-190-4-c), [318](/reference/core-rules#rule-318)–[324](/reference/core-rules#rule-324))

### What if the spell has no legal target there?

If a hidden spell requires a target, you need a legal one under its restrictions to play it. Do not reveal and play it merely to obtain another instruction on the card. If the play was legal but a response later makes a target illegal, resolve the spell using the ordinary target-recheck rules; instructions involving the illegal target are ignored. ([811.1.d](/reference/core-rules#rule-811-1-d), [359.3.e.1](/reference/core-rules#rule-359-3-e-1)–[359.3.e.5](/reference/core-rules#rule-359-3-e-5))

For example, if **Hidden Blade** was legally aimed at a unit at A and a response moves that unit to another battlefield, its instructions related to that target are ignored when it resolves. This is one of the rulebook’s examples. ([359.3.e.5](/reference/core-rules#rule-359-3-e-5))

### Can I choose something at another location?

Apply the battlefield restriction **to each target individually**. An explicit targeting condition that cannot be satisfied at that battlefield creates an exception for that choice; an empty battlefield alone does not create one. ([811.1.d.2](/reference/core-rules#rule-811-1-d-2)–[811.1.d.4](/reference/core-rules#rule-811-1-d-4))

- **Tideturner:** its corrected play effect specifies a unit you control at another location. That explicit condition permits choosing a unit away from the battlefield where Tideturner entered.
- **Smoke and Mirrors:** when played from facedown at A, its first friendly-unit target must be at A. Its second target must be at a different location, so that choice can be elsewhere. The exception for the second choice does not release the first choice from its restriction.

Both are official Core Rules examples. ([811.1.d.3](/reference/core-rules#rule-811-1-d-3)–[811.1.d.4](/reference/core-rules#rule-811-1-d-4))

### Does every part of a hidden card affect only that battlefield?

No. Hidden restricts specified choices; other instructions function normally. With **Stand United**, the targeted buff must choose a friendly unit at the associated battlefield, but the turn-long improvement to friendly units’ buffs applies across locations. A non-targeting replacement effect on **Zhonya’s Hourglass** is not restricted to the battlefield where it was hidden. ([811.2](/reference/core-rules#rule-811-2); [Origins patch notes][origins-patch], “Hide/Hidden”)

### What if another effect changes where the hidden unit enters?

Follow the specific permission. **Last Caress** permits its next qualifying unit to be played to any battlefield, including from facedown. If you use that permission to play Blastcone Fae at B after hiding it at A, its play effect targets units at **B**, the battlefield it entered. The Core Rules include this location-override scenario. ([811.1.d.3](/reference/core-rules#rule-811-1-d-3); [Radiance errata][radiance-errata], “Last Caress”)

### Does a facedown card still count as a card with Hidden?

Its front-side characteristics cannot be referenced while it is facedown. It does not count as a card with the Hidden keyword for an effect checking that characteristic. Riot’s **Gutter Guardian** ruling confirms that you cannot use its Show Off ability to show off a facedown card at a battlefield. ([811.5.a](/reference/core-rules#rule-811-5-a), [129.4](/reference/core-rules#rule-129-4); [Radiance patch notes][radiance-patch], Gutter Guardian question)

### Does ignoring the base cost also remove Deflect?

No. Deflect imposes an additional cost when applicable. Hidden’s base-cost permission does not waive it, nor does it waive another mandatory additional cost. Include those costs when determining whether you can legally complete the play. ([356.1.b.3](/reference/core-rules#rule-356-1-b-3), [356.2.a.1](/reference/core-rules#rule-356-2-a-1)–[356.2.a.2](/reference/core-rules#rule-356-2-a-2))

## Changes to the Hidden rules

These are changes or clarifications to the mechanic itself. Use the current numbered rules above for play today; historical rule numbers may differ.

| Update | What Riot clarified | Practical consequence |
| --- | --- | --- |
| [Origins patch notes][origins-patch] · published October 24, 2025 · “Hide/Hidden” | Champion Zone cards can use Hidden; the hiding payment is Power of any domain; Hidden grants actual Reaction; targeting restrictions were revised. | Older explanations that require matching-domain Power or confine every effect to the hiding battlefield are unreliable. Riot specifically identifies Zhonya’s Hourglass as affected by the targeting change. |
| [Vendetta patch notes][vendetta-patch] · published July 17, effective July 24, 2026 · “Hidden Targeting” | Evaluate each targeting choice separately. | An exception for one target does not free every other target from the battlefield restriction. This is now [811.1.d.4](/reference/core-rules#rule-811-1-d-4). |

## Card errata relevant to Hidden

These entries concern individual cards. They do not mean that Hidden’s basic procedure changed on every listed date. The summaries describe the relevant correction; follow the linked official entry for complete corrected text.

| Official errata and publication date | Card | Relevant correction and consequence |
| --- | --- | --- |
| [Origins][origins-errata] · October 28, 2025 | Tideturner | Its optional swap target is now a unit you control at another location. That explicit location condition supports the targeting exception explained above. |
| [Origins][origins-errata] · October 28, 2025 | Ava Achiever | Its attack-triggered instruction plays the Hidden card from hand; the instruction to play it at Ava’s battlefield applies if it is a unit. This is not the act of hiding a card, so do not add Hidden’s next-turn waiting period to Ava’s effect. |
| [Spiritforged][spiritforged-errata] · January 14, 2026 | Edge of Night | The locality reminder on its attachment play effect was parenthesized. Read that reminder with Hidden’s play-effect targeting rules, rather than treating it as an independent mechanic. |
| [Unleashed][unleashed-errata] · April 3, 2026 | Guards!; Bone Skewer; Keeper of Masks | Follow-up instructions were made explicit: Guards! separates its optional readying instruction; Bone Skewer replaces the later stun trigger wording with a linked instruction; Keeper of Masks separates its tokens’ copy instruction. These are instruction-sequencing corrections on Hidden cards. |
| [Vendetta][vendetta-errata] · July 23, 2026 | Resonating Strike | Its Reaction reminder was corrected to describe Reaction timing. The card already has Reaction; the correction does not add a new keyword or require it to be hidden before using its printed Reaction permission. |
| [Radiance][radiance-errata] · October 9, 2026 | Elnuk Herd | Its play effect can choose a friendly unit, including itself, rather than requiring another friendly unit. When played from facedown, apply Hidden’s locality rule to that choice. |
| [Radiance][radiance-errata] · October 9, 2026 | Last Caress | Punctuation around the facedown permission was clarified. The next qualifying unit’s permission to enter any battlefield includes a unit played from facedown. |

## Source record

All sources below were checked **November 20, 2026**. The [Rules Hub][hub] still links Core Rules updated October 9, 2026. The errata table uses publication dates; the Vendetta rules update’s separately stated effective date is identified above.

- [Riftbound Core Rules](/reference/core-rules), **October 9, 2026 edition**: Hide 422; Hidden 811; facedown zones 107.3; control 190.4; cleanup 323.6.a; costs 356; target rechecks 359.3.e. Exact anchors appear beside each explanation.
- [Origins Core Rules patch notes][origins-patch], **October 24, 2025**, “Hide/Hidden.”
- [Origins Card Errata][origins-errata], **October 28, 2025**, “Tideturner” and “Ava Achiever.”
- [Spiritforged Errata][spiritforged-errata], **January 14, 2026**, “Edge of Night.”
- [Unleashed Errata Updates][unleashed-errata], **April 3, 2026**, “Guards!,” “Bone Skewer,” and “Keeper of Masks.”
- [Vendetta Core Rules patch notes][vendetta-patch], **published July 17; effective July 24, 2026**, “Hidden Targeting.”
- [Vendetta Errata Updates][vendetta-errata], **July 23, 2026**, “Resonating Strike.”
- [Radiance Errata Updates][radiance-errata], **October 9, 2026**, “Elnuk Herd” and “Last Caress.”
- [Radiance Core Rules patch notes][radiance-patch], **published October 9; effective October 16, 2026**, Gutter Guardian’s Show Off question.

[Back to Mechanics](/mechanics/) · [Mechanics and keywords overview](/advanced/mechanics-and-keywords) · [Advanced Rules learning path](/advanced/)

[hidden-permission]: /reference/core-rules#rule-811-1-b
[hub]: https://playriftbound.com/en-us/rules-hub/
[origins-patch]: https://playriftbound.com/en-us/news/rules-and-releases/riftbound-core-rules-patch-notes/
[origins-errata]: https://playriftbound.com/en-us/news/rules-and-releases/riftbound-origins-card-errata/
[spiritforged-errata]: https://playriftbound.com/en-us/news/rules-and-releases/riftbound-spiritforged-errata/
[unleashed-errata]: https://playriftbound.com/en-us/news/rules-and-releases/unleashed-errata-updates/
[vendetta-patch]: https://playriftbound.com/en-us/news/announcements/core-rules-vendetta-patch-notes/
[vendetta-errata]: https://playriftbound.com/en-us/news/announcements/vendetta-errata-updates/
[radiance-errata]: https://playriftbound.com/en-us/news/announcements/radiance-errata-updates/
[radiance-patch]: https://playriftbound.com/en-us/news/announcements/core-rules-radiance-patch-notes-effective-october-16-2026/
