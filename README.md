# @ontic-labs/design-system

Shared design system for Ontic Labs applications.

## Installation

```bash
npm install @ontic-labs/design-system
# or
bun add @ontic-labs/design-system
```

## Usage

### 1. Import CSS Tokens

In your global CSS file:

```css
/* Import tokens (CSS custom properties) */
@import "@ontic-labs/design-system/css/tokens";

/* Optional: Import base styles */
@import "@ontic-labs/design-system/css/base";
```

### 2. Use Tailwind Preset (optional)

If using Tailwind CSS, add the preset to your config:

```ts
// tailwind.config.ts
import onticPreset from "@ontic-labs/design-system/preset";

export default {
  presets: [onticPreset],
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  // ...
};
```

### 3. Use Design Tokens in JavaScript

```ts
import { brand, brandHex, palette, fontFamily } from "@ontic-labs/design-system";

// HSL values for CSS
console.log(brand.blue); // "208 89% 38%"

// Hex values for other uses
console.log(brandHex.blue); // "#0B6FB6"
```

## Available Exports

| Export | Description |
|--------|-------------|
| `@ontic-labs/design-system` | JS tokens (brand, palette, fonts) |
| `@ontic-labs/design-system/preset` | Tailwind CSS preset |
| `@ontic-labs/design-system/css/tokens` | CSS custom properties |
| `@ontic-labs/design-system/css/base` | Base element styles |

## CSS Custom Properties

The design system provides these CSS variables:

### Brand Colors
- `--ontic-blue`: Primary brand blue (#0B6FB6)
- `--ontic-gray`: Secondary gray (#7A7A7A)
- `--ontic-dark-gray`: Dark anchor gray (#4A4A4A)

### UI Colors
- `--background`, `--foreground`
- `--background-muted`, `--foreground-muted`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--border`, `--input`, `--ring`

### Status Colors
- `--status-success`, `--status-success-muted`
- `--status-warning`, `--status-warning-muted`
- `--status-error`, `--status-error-muted`
- `--status-info`, `--status-info-muted`

### Utilities
- `--radius`: Border radius (0.75rem)
- `--transition-fast`, `--transition-base`, `--transition-slow`

## Container Classes

The base CSS provides container utilities:

```html
<header class="header-container">...</header>
<main class="content-container">...</main>
```

- `content-container`: Max 1200px, centered with responsive padding
- `header-container`: Max 1400px, centered with responsive padding

## Dark Mode

Add the `dark` class to your `<html>` element to enable dark mode:

```html
<html class="dark">
```

All CSS variables automatically adjust for dark mode.

## License

MIT © Ontic Labs
