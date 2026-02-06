/**
 * Ontic Design Tokens
 * 
 * Canonical color values and semantic mappings for the Ontic brand.
 */

// ============================================
// BRAND COLORS (Canonical HSL values)
// ============================================
export const brand = {
  blue: "208 89% 38%",        // #0B6FB6 - Authority/Permission
  gray: "0 0% 48%",           // #7A7A7A - Structure/Constraint
  darkGray: "0 0% 29%",       // #4A4A4A - Weight/Anchor
} as const;

// Hex equivalents for non-CSS contexts
export const brandHex = {
  blue: "#0B6FB6",
  gray: "#7A7A7A",
  darkGray: "#4A4A4A",
} as const;

// ============================================
// SEMANTIC COLOR PALETTE (HSL values)
// ============================================
export const palette = {
  positive: {
    DEFAULT: "142 76% 36%",
    light: "142 50% 92%",
    dark: "142 76% 96%",
  },
  caution: {
    DEFAULT: "38 92% 50%",
    light: "38 80% 92%",
    dark: "38 92% 10%",
  },
  negative: {
    DEFAULT: "0 84% 60%",
    light: "0 70% 95%",
    dark: "0 0% 98%",
  },
  info: {
    DEFAULT: "217 91% 60%",
    light: "217 70% 94%",
    dark: "217 91% 98%",
  },
  special: {
    DEFAULT: "270 80% 60%",
    light: "270 60% 95%",
    dark: "270 80% 96%",
  },
  neutral: {
    DEFAULT: "190 80% 50%",
    light: "190 60% 94%",
    dark: "190 80% 96%",
  },
  accent: {
    DEFAULT: "25 95% 53%",
    light: "25 80% 94%",
    dark: "25 95% 96%",
  },
} as const;

// ============================================
// TYPOGRAPHY
// ============================================
export const fontFamily = {
  sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
  mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
} as const;

export const fontImport = 
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap";

// ============================================
// SPACING & RADIUS
// ============================================
export const radius = {
  DEFAULT: "0.75rem",
  sm: "calc(0.75rem - 4px)",
  md: "calc(0.75rem - 2px)",
  lg: "0.75rem",
  xl: "calc(0.75rem + 4px)",
  "2xl": "calc(0.75rem + 8px)",
} as const;

// ============================================
// CONTAINER WIDTHS
// ============================================
export const container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1400px",
} as const;

// ============================================
// TRANSITIONS
// ============================================
export const transitions = {
  fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
  base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
  slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;
