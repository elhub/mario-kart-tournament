# Mario Kart Tournament - AI Agent Instructions

## Project Overview

React + TypeScript tournament bracket visualization for a Mario Kart competition. Built with Vite, Chakra UI, and deployed to GitHub Pages at `/mario-kart-tournament/` base path.

## Architecture & Data Model

### Core Type Hierarchy

- **Tournament** → **Round[]** → **Race[]** → **Player[]**
- All types in `src/types.ts` - review this file first for complete data structures
- Tournament data split across `src/data/round1.ts` through `round4.ts`
- Player profiles centralized in `src/data/players.ts` with `playerProfiles` lookup object

### Player Data Pattern

Players are defined once in `playerProfiles` (without position), then instantiated via `createPlayer(playerId, position?)`:

```typescript
// Define once in players.ts
export const playerProfiles: Record<string, Omit<Player, "position">> = {
  "johanna": { id: "johanna", name: "Johanna", description: "...", attributes: [...] }
}

// Use everywhere via createPlayer
createPlayer("johanna", 1) // First place
createPlayer("johanna") // No position yet
```

### Dynamic Text with Placeholders

Race prospects/summaries use `{player-id}` placeholders replaced at render time:

- Template: `"{johanna} dominated while {per-kristian} caused chaos"`
- Processed by `generateProspectElements()` in `src/utils/prospectUtils.ts`
- Returns clickable player name elements for React rendering
- Player IDs MUST match keys in `playerProfiles` exactly (e.g., `{ole-kristian}` not `{ole_kristian}`)

## Development Workflow

### Commands

```bash
npm run dev          # Start dev server (Vite)
npm run build        # TypeScript compile + Vite build
npm run transpile    # TypeScript compile only
npm run lint         # ESLint check
npm run knip         # Find unused exports/deps
```

### Path Resolution

Uses `@/*` alias for `./src/*` (configured in `vite.config.ts` and `tsconfig.json`):

```typescript
import { Round } from "@/types";
import { createPlayer } from "@/data/players";
```

## Project-Specific Conventions

### Component Patterns

1. **BracketCard** - Individual race display with player list, clickable to show RaceModal
2. **RaceModal** - Tabbed modal showing race prospect (pre-race) and summary (post-race)
3. **Round** - Groups BracketCards by tournament round
4. **BracketConnections** - SVG lines connecting rounds (uses p5.js for canvas rendering)

### State Management

- Race data is static (no backend, data in TypeScript files)
- Modal state managed via Chakra UI's `useDisclosure()` hook
- URL state via `nuqs` library (though minimally used currently)

### Color Mode Support

All components use Chakra's `useColorModeValue(lightColor, darkColor)` for theming:

```typescript
const bg = useColorModeValue("white", "gray.700");
const border = useColorModeValue("gray.400", "gray.700");
```

## Adding New Content

### Adding a New Player

1. Add profile to `playerProfiles` in `src/data/players.ts`
2. Use kebab-case for ID: `"per-kristian"` not `"per_kristian"`
3. Include emoji attributes and description template with `{name}` placeholder

### Adding a New Race

1. Add to appropriate `src/data/roundX.ts` file
2. Use `createPlayer(id, position)` for finished races
3. Use `createPlayer(id)` (no position) for upcoming races
4. In prospect/summary text, reference players as `{player-id}` (exact match to profile key)
5. Set `isFinished: true` when race is complete

### Race Progression Pattern

- 1st and 2nd place advance (highlighted with yellow background)
- Match IDs follow pattern: `m1`, `m2`, etc.
- Round progression: round1 (16 players/8 races) → round2 (8 players/4 races) → round3 (4 players/2 races) → round4 (2 players/1 race)

## Deployment & Build

### GitHub Pages Configuration

- Deployed to `elhub.github.io/mario-kart-tournament/`
- **Critical**: Base path `/mario-kart-tournament/` set in both:
  - `vite.config.ts`: `base: "/mario-kart-tournament/"`
  - `main.tsx`: `<BrowserRouter basename="/mario-kart-tournament">`
- Homepage in `package.json` matches deployment URL

### Build Output

- TypeScript compilation via `tsc -b` (builds to memory, no output files)
- Vite bundles to `dist/` directory
- Assets go to `public/` (copied as-is during build)

## Common Pitfalls

- **Player ID mismatch**: Placeholder `{player-id}` must exactly match `playerProfiles` key
- **Position highlighting**: Only positions 1-2 get yellow backgrounds (they advance)
- **Base path**: All routing/links must account for `/mario-kart-tournament/` prefix
- **Player description check**: Modal only opens for players with descriptions (not placeholder "Player X")

## External Dependencies

- **Chakra UI**: Component library with built-in theming
- **p5.js**: Canvas rendering for bracket connection lines
- **nuqs**: Type-safe URL state (React Router v7 adapter)
- **Framer Motion**: Animation library (used by Chakra internally)

## Reusable Actions

### Action: Generate Race Day Announcement

**Trigger phrase:** "execute race day announcement" or "generate race day message"

**Purpose:** Generate a Microsoft Teams-formatted message to announce today's race to all participants.

**Steps to execute:**

1. **Determine today's race:**

   - Use the current date to find the matching race in `src/data/round1.ts` or `src/data/round2.ts`
   - Extract: date, time, circuit, cc, location, and player IDs

2. **Get player information:**

   - Look up each player ID in `src/data/players.ts` (`playerProfiles`)
   - Extract: name, emoji (first attribute), and ability title (text before the dash in description)

3. **Generate the message with this exact format:**

🏁 **RACE DAY - [Full Date]!** 🏁

Hey racers! [circuit-emoji]

The [ordinal number] race of our Mario Kart Tournament is happening **TODAY at [TIME]** in [LOCATION]!

**Today's Competitors - [Circuit Name] ([CC]):**

[emoji] **[Player Name]** - _[Ability Title]_
[emoji] **[Player Name]** - _[Ability Title]_
[emoji] **[Player Name]** - _[Ability Title]_
[emoji] **[Player Name]** - _[Ability Title]_

[1-2 sentences of exciting commentary mentioning **player names in bold** and their abilities to create anticipation]

📊 **Check the full tournament brackets:** https://elhub.github.io/mario-kart-tournament/

Good luck to all participants! 🎮

---

_Reminder: Race starts at [TIME] sharp in [LOCATION]. Don't be late!_

**CRITICAL Formatting requirements:**

- Output ONLY the message text (do NOT wrap in code blocks, markdown fences, or ``` marks)
- Use **text** for bold (including ALL player names mentioned anywhere in the message)
- Use _text_ for italic (for ability titles only)
- Include exactly ONE blank line between sections
- NO extra spacing, indentation, or line breaks beyond what's in the template
- Ability title = text before the dash in player description (e.g., "Master of Momentum" from "Master of Momentum - {name} flows through...")

**Special cases:**

- For quarterfinals/semifinals/finals: Replace "The [ordinal] race" with "The [ordinal] quarterfinal/semifinal/final"
- For Round 2+: Add this line after the competitors list with one blank line before and after: "Only the top 2 advance to the [next round name]!"
- Use appropriate circuit emoji: 🍄 (Mushroom), 🌸 (Flower), ⚡ (Lightning), 🐚 (Shell), 🍌 (Banana), 🍃 (Leaf), ⭐ (Star)

**Example ability title extraction:**

- Description: "Master of Momentum - {name} flows through tracks..."
- Ability title: "Master of Momentum"

### Action: Advance Race Winners

**Trigger phrase:** "execute advance race winners" or "advance winners to next round" or "continue winners to next round"

**Purpose:** After a race is completed, automatically advance the 1st and 2nd place finishers to the next round without adding summaries or generating prospects.

**Steps to execute:**

1. **Identify today's completed race:**

   - Use the current date to find the matching race in the appropriate round file (`src/data/round1.ts`, `round2.ts`, or `round3.ts`)
   - Verify the race has `isFinished: true`
   - Extract the player IDs with positions 1 and 2 from the `players` array

2. **Determine the next round file:**

   - Round 1 races (m1-m8) → Advance to Round 2 (`src/data/round2.ts`) quarterfinals
   - Round 2 races (m9-m12) → Advance to Round 3 (`src/data/round3.ts`) semifinals
   - Round 3 races (m13-m14) → Advance to Round 4 (`src/data/round4.ts`) finals

3. **Find the correct match in the next round:**

   - Match placeholder player IDs to determine which next-round match receives the winners
   - Placeholders follow pattern: `{ id: "winner-race-X", name: "Winner of Race X", description: "" }`
   - Example: Race 3 winners go to the match containing `"winner-race-3"` and `"second-race-3"` placeholders

4. **Update the next round file:**

   - If `createPlayer` import is missing, add it: `import { createPlayer } from "./players";`
   - Replace placeholder objects with `createPlayer(playerId)` calls (NO position parameter)
   - Maintain proper player order: 1st place winner, then 2nd place winner
   - Preserve exact formatting and indentation

5. **Validation rules:**

   - Do NOT add race summaries
   - Do NOT generate race prospects
   - Do NOT add position parameters to `createPlayer()` calls in next round
   - Do NOT mark next round races as finished
   - Only modify the `players` array in the target match

**Example transformation:**

Before (in round2.ts):

```typescript
players: [
  { id: "winner-race-3", name: "Winner of Race 3", description: "" },
  { id: "winner-race-4", name: "Winner of Race 4", description: "" },
  { id: "second-race-3", name: "2nd Place of Race 3", description: "" },
  { id: "second-race-4", name: "2nd Place of Race 4", description: "" },
],
```

After (race 3 completed with pal-oskar 1st, henrik-h 2nd):

```typescript
players: [
  createPlayer("pal-oskar"),
  createPlayer("henrik-h"),
  { id: "winner-race-4", name: "Winner of Race 4", description: "" },
  { id: "second-race-4", name: "2nd Place of Race 4", description: "" },
],
```

**Race-to-Match mapping:**

- Races 1-2 → Match m9 (quarterfinal 1)
- Races 3-4 → Match m10 (quarterfinal 2)
- Races 5-6 → Match m11 (quarterfinal 3)
- Races 7-8 → Match m12 (quarterfinal 4)
- Races 9-10 → Match m13 (semifinal 1)
- Races 11-12 → Match m14 (semifinal 2)
- Races 13-14 → Match m15 (final)

**Response format:**

After completing the update, provide a brief confirmation:

```
Done! Added the race X winners to [round name] match mY:
- 1st: **player-name** (Player Title)
- 2nd: **player-name** (Player Title)
```

### Action: Generate Post-Race Summary

**Trigger phrase:** "execute post-race summary" or "write post race summary" or "generate race summary"

**Purpose:** After a race is completed, generate an engaging post-race summary based on actual race results (positions) and player unique abilities.

**Steps to execute:**

1. **Identify today's completed race:**

   - Use the current date to find the matching race in the appropriate round file
   - Verify the race has `isFinished: true`
   - Extract all player IDs and their positions from the `players` array

2. **Get player information:**

   - Look up each player ID in `src/data/players.ts` (`playerProfiles`)
   - Extract: name and description (for ability titles/characteristics)
   - Note ability titles from descriptions (text before the dash)

3. **Generate the summary:**

   - **CRITICAL**: Only reference actual positions and results - do NOT fabricate specific race incidents
   - Use player abilities and characteristics to describe HOW they achieved their positions
   - Reference the circuit/cup being raced
   - Mention which players advance (1st and 2nd place)
   - Use engaging, varied language while staying truthful

4. **Content guidelines - DO:**

   - Celebrate actual placements (1st, 2nd, 3rd, 4th)
   - Reference player abilities and unique characteristics
   - Mention general racing concepts (momentum, precision, speed, tactics, etc.)
   - Note the circuit/cup tracks being raced
   - Use varied, exciting language
   - Include clickable player name placeholders: `{player-id}`

5. **Content guidelines - DO NOT:**

   - Fabricate specific race incidents (e.g., "fell to last place early", "red shell on final lap")
   - Make up events that can be proven false
   - Create detailed narratives about specific moments that didn't happen
   - Claim positions changed in specific ways during the race

6. **Special considerations:**

   - If user mentions specific details (e.g., "close battle for 2nd", "stand-in player"), incorporate those
   - If stand-in players are mentioned, include them with placeholder links: `{stand-in-player-id}`
   - Keep summaries around 4-6 sentences
   - Use unique phrasing for each summary (avoid repetitive patterns)

7. **Update the race data:**

   - Add the `summary` field to the race object in the appropriate round file
   - Insert between the `prospect` field and `players` array
   - Ensure proper indentation and formatting

**Example good summary:**

```typescript
summary:
  "Dominant Star Cup quarterfinal! {johanna}, the Master of Momentum, proved unstoppable with her flowing racing lines and perfect speed maintenance, claiming first place through sheer momentum mastery across the technical tracks. {per-kristian}, the Master of Chaos, secured second place by turning mayhem into opportunity at crucial moments, his chaos tactics proving decisive. {lise}, the Perfectionist, earned third with her flawless mini-turbos and surgical precision throughout the demanding circuits. {alexander}, the Intimidator, finished fourth despite his aggressive racing style and psychological warfare. {johanna} and {per-kristian} advance to the semifinals!",
```

**Response format:**

After adding the summary, provide brief confirmation noting the race and advancing players.

### Action: Generate Pre-Race Prospects

**Trigger phrase:** "execute pre-race prospects" or "generate pre race prospects" or "write race prospects"

**Purpose:** Generate exciting pre-race prospects for an upcoming race based on previous race results and player unique abilities.

**Steps to execute:**

1. **Identify the target race:**

   - User will specify which race needs prospects (usually mentioned as "race X is ready")
   - Locate the race in the appropriate round file
   - Identify all players in the race

2. **Research player backgrounds:**

   - For each player, determine their previous race performance:
     - Which race they came from
     - What position they finished (1st or 2nd to advance)
     - Look up the race summary to understand their performance
   - Look up player abilities from `src/data/players.ts` (`playerProfiles`)
   - Extract ability titles and characteristics from descriptions

3. **Research circuit information:**

   - Note the circuit/cup being raced
   - If known, reference actual Mario Kart tracks in that cup
   - Consider track characteristics (technical, flow-based, etc.)

4. **Generate the prospect:**

   - **CRITICAL**: Only reference actual previous race results - do NOT fabricate race incidents
   - Mention each player's previous finish (1st or 2nd in their qualifying race)
   - Reference player abilities and how they might apply to this race
   - Note the increased CC speed if applicable (50cc → 100cc → 150cc)
   - Reference actual circuit tracks if known
   - Create excitement about the matchup without making false claims

5. **Content guidelines - DO:**

   - State actual previous race placements (e.g., "won Race 3", "secured second in Race 5")
   - Reference player abilities and characteristics
   - Mention circuit/cup and tracks being raced
   - Note how abilities might interact with track types
   - Create strategic matchup narratives (defense vs offense, speed vs precision, etc.)
   - Use clickable player name placeholders: `{player-id}`

6. **Content guidelines - DO NOT:**

   - Fabricate specific events from previous races
   - Make up details about HOW they won or got 2nd (unless from actual race summaries)
   - Create false narratives about past performances

7. **Update the race data:**

   - Add the `prospect` field to the race object
   - Ensure proper indentation and formatting
   - Verify all player ID placeholders match exactly

**Example good prospect:**

```typescript
prospect:
  "The Quarterfinals bring an elite showdown on the Star Cup! {johanna}, the Master of Momentum, arrives fresh off her first-place finish in Race 1, her flowing racing lines and perfect speed maintenance making her a formidable force. {christoffer-s}, the Comeback Kid, won Race 2 with his mushroom mastery and determination - his resilience under pressure is legendary. {per-kristian}, the Master of Chaos, secured second in Race 1 with his ability to turn mayhem into opportunity at crucial moments. {lise}, the Perfectionist, earned second in Race 2 through flawless mini-turbos and surgical precision. The Star Cup features Wario Shipyard, Maple Treeway, Mushroom Gorge, and Grumble Volcano - technical tracks where one mistake can be costly. At 100cc speeds, {johanna}'s momentum mastery could dominate the flow-based tracks, while {lise}'s perfect execution might shine on technical sections. Two race winners clash with two proven contenders - who advances to the semifinals?",
```

**Response format:**

After adding the prospect, provide brief confirmation noting the race and the players involved.

### Action: Generate Post-Race Announcement

**Trigger phrase:** "execute post-race announcement" or "generate post race announcement" or "generate race completion message"

**Purpose:** Generate a fun and engaging Microsoft Teams message to announce that today's race is complete and results are published.

**Steps to execute:**

1. **Identify today's completed race:**

   - Use the current date to find the matching race in the appropriate round file (`src/data/round1.ts`, `round2.ts`, `round3.ts`, or `round4.ts`)
   - Verify the race has `isFinished: true` and `summary` is defined
   - Extract: race ID (e.g., "m1"), circuit name, date, and all player positions from the `players` array

2. **Get player information:**

   - Look up each player ID in `src/data/players.ts` (`playerProfiles`)
   - Extract: name and ability title (text before the dash in description)
   - Identify 1st and 2nd place finishers (they advance)

3. **Determine race context:**

   - Round 1 races (m1-m8): "Round of Sixteen" races
   - Round 2 races (m9-m12): "Quarterfinals"
   - Round 3 races (m13-m14): "Semifinals"
   - Round 4 race (m15): "Finals"
   - Extract next race information for advancing players (date and race number)

4. **Generate the message with this format:**

[Circuit Emoji] **RACE [NUMBER] COMPLETE - [CIRCUIT NAME] [VERB]!** [Themed Emoji]

[Exciting opening line related to the race outcome!] [Fire/Trophy Emoji]

**[1st Place Name]**, [ability title], [victory description] to claim **1ST PLACE** 🥇! **[2nd Place Name]**, [ability title], [achievement description] to secure **2ND PLACE** 🥈!

[Optional: Additional drama/details about 3rd/4th place or close finishes - 1-2 sentences if noteworthy]

Both [1st Place Name] and [2nd Place Name] advance to the [Next Round Name] ([Next Race Number]) on [Next Race Date]! 🎯

📊 **[Results description] now live!**
👉 https://elhub.github.io/mario-kart-tournament/

[Teaser for next race]: [Next Circuit/Round Name] [action verb]! [Emoji]

**CRITICAL Formatting requirements:**

- Output ONLY the message text (do NOT wrap in code blocks or markdown fences)
- Use **text** for bold (player names, placements, key phrases)
- Match the energy and tone to the race outcome (close finish = more excitement, dominant win = different tone)
- Include emojis throughout for visual appeal
- Keep it concise but exciting (5-8 lines total)
- Always include the tournament brackets link
- Always mention both advancing players and their next race details

5. **Circuit emoji and verb suggestions:**

   - Mushroom Cup: 🍄 "DELIVERS", "CONCLUDES", "FINISHES"
   - Flower Cup: 🌸 "DELIVERS DRAMA", "FINISHES"
   - Lightning Cup: ⚡ "ELECTRIFIES", "DELIVERS"
   - Shell Cup: 🐚 "DELIVERS DRAMA", "FINISHES"
   - Banana Cup: 🍌 "DELIVERS A PHOTO FINISH", "CONCLUDES"
   - Leaf Cup: 🍃 "DELIVERS DOUBLE PHOTO FINISH", "FINISHES"
   - Star Cup: ⭐ "DELIVERS ICE-COLD VICTORY", "SHINES"

6. **Special cases to include:**

   - If race summary mentions stand-in players, include a humorous note about it
   - If race summary mentions close finishes/photo finishes, emphasize the drama
   - If it's the last race of a round, mention that the round is complete
   - For quarterfinals onward, note the increased CC (100cc or 150cc)
   - If race summary mentions specific dramatic moments, reference them briefly

7. **Example messages:**

**Example 1 (Dominant win):**

🍄 **RACE 1 COMPLETE - MUSHROOM CUP OPENS!** 🏁

MOMENTUM MASTERS TAKE COMMAND! 🔥

**Johanna**, the Master of Momentum, dominated from start to finish with flowing racing lines to claim **1ST PLACE** 🥇! **Per Kristian**, the Master of Chaos, turned mayhem into opportunity with a perfectly timed red shell for **2ND PLACE** 🥈!

Both advance to the Quarterfinals (Race 9) on December 11th! 🎯

📊 **Race results & summary now live!**
👉 https://elhub.github.io/mario-kart-tournament/

Tomorrow: Flower Cup brings contrasting styles! 🌸💨

**Example 2 (Close finish with special notes):**

🐚 **RACE 4 COMPLETE - SHELL CUP DELIVERS DRAMA!** 🏆

Tactical brilliance and a SUPER CLOSE FINISH! 🔥

**Alexander**, the Intimidator, dominated with psychological warfare and aggressive racing to claim **1ST PLACE** 🥇 (with Hedda as stand-in - tactical genius or unfair advantage? 🤔). In an absolutely nail-biting finish, **Tor Magnus**, the Rising Star, edged out Enzo by the narrowest of margins to secure **2ND PLACE** 🥈!

**Enzo**, the Gravity Defier, finished 3rd and is reportedly considering filing a formal complaint with the tournament committee... 📝⚖️

Both Alexander and Tor Magnus advance to the Quarterfinals (Race 10) on December 12th! 🎯

📊 **Race results & summary now live!**
👉 https://elhub.github.io/mario-kart-tournament/

Tomorrow: Banana Cup brings explosive action! 🍌💨

**Example 3 (Round completion):**

🍄 **RACE 8 COMPLETE - ROUND OF SIXTEEN CONCLUDES!** 🏁

THE DRIFT KING REIGNS SUPREME! 👑

**Sander**, the Drift King, dominated every corner with absolutely flawless technique to claim **1ST PLACE** 🥇! **Markus B.**, The Anchor, stayed unshakeably steady through all the chaos with ironclad nerves to secure **2ND PLACE** 🥈!

Both advance to the Quarterfinals (Race 12) on December 16th! 🎯

🎉 **ROUND OF SIXTEEN IS COMPLETE!** All 16 qualifiers are set for the Quarterfinals!

📊 **Full race results & the final Round 1 summary now live!**
👉 https://elhub.github.io/mario-kart-tournament/

Tomorrow: The Quarterfinals begin with Race 9 at 100cc! 🔥💨

**Response format:**

Output the complete message ready to paste into Teams (no code blocks, no additional commentary).
