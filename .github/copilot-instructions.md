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
