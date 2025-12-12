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
