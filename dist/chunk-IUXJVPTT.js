// src/preset.ts
var preset = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2rem"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        // Ontic Brand Colors
        "ontic-blue": "hsl(var(--ontic-blue) / <alpha-value>)",
        "ontic-gray": "hsl(var(--ontic-gray) / <alpha-value>)",
        "ontic-dark-gray": "hsl(var(--ontic-dark-gray) / <alpha-value>)",
        // Core UI colors
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)"
        },
        // Semantic status colors
        success: {
          DEFAULT: "hsl(var(--status-success) / <alpha-value>)",
          foreground: "hsl(var(--status-success-foreground) / <alpha-value>)",
          muted: "hsl(var(--status-success-muted) / <alpha-value>)"
        },
        warning: {
          DEFAULT: "hsl(var(--status-warning) / <alpha-value>)",
          foreground: "hsl(var(--status-warning-foreground) / <alpha-value>)",
          muted: "hsl(var(--status-warning-muted) / <alpha-value>)"
        },
        error: {
          DEFAULT: "hsl(var(--status-error) / <alpha-value>)",
          foreground: "hsl(var(--status-error-foreground) / <alpha-value>)",
          muted: "hsl(var(--status-error-muted) / <alpha-value>)"
        },
        info: {
          DEFAULT: "hsl(var(--status-info) / <alpha-value>)",
          foreground: "hsl(var(--status-info-foreground) / <alpha-value>)",
          muted: "hsl(var(--status-info-muted) / <alpha-value>)"
        },
        // Link colors
        link: {
          DEFAULT: "hsl(var(--link) / <alpha-value>)",
          hover: "hsl(var(--link-hover) / <alpha-value>)"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)"
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"]
      },
      fontSize: {
        // Fluid typography scale
        "fluid-xs": ["clamp(0.6875rem, 0.6563rem + 0.156vw, 0.75rem)", { lineHeight: "1.4" }],
        "fluid-sm": ["clamp(0.8125rem, 0.7813rem + 0.156vw, 0.875rem)", { lineHeight: "1.5" }],
        "fluid-base": ["clamp(0.9375rem, 0.9063rem + 0.156vw, 1rem)", { lineHeight: "1.6" }],
        "fluid-lg": ["clamp(1.0625rem, 1.0313rem + 0.156vw, 1.125rem)", { lineHeight: "1.55" }],
        "fluid-xl": ["clamp(1.1875rem, 1.1563rem + 0.156vw, 1.25rem)", { lineHeight: "1.4" }],
        "fluid-2xl": ["clamp(1.375rem, 1.3125rem + 0.313vw, 1.5rem)", { lineHeight: "1.35" }],
        "fluid-3xl": ["clamp(1.625rem, 1.5rem + 0.625vw, 1.875rem)", { lineHeight: "1.25" }],
        "fluid-4xl": ["clamp(2rem, 1.75rem + 1.25vw, 2.5rem)", { lineHeight: "1.15" }],
        "fluid-5xl": ["clamp(2.5rem, 2rem + 2.5vw, 3.5rem)", { lineHeight: "1.1" }]
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "fade-up": "fade-up 0.4s ease-out"
      }
    }
  }
};
var preset_default = preset;

export {
  preset_default
};
