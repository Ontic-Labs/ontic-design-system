export { default as preset } from './preset.js';
import 'tailwindcss';

/**
 * Ontic Design Tokens
 *
 * Canonical color values and semantic mappings for the Ontic brand.
 */
declare const brand: {
    readonly blue: "208 89% 38%";
    readonly gray: "0 0% 48%";
    readonly darkGray: "0 0% 29%";
};
declare const brandHex: {
    readonly blue: "#0B6FB6";
    readonly gray: "#7A7A7A";
    readonly darkGray: "#4A4A4A";
};
declare const palette: {
    readonly positive: {
        readonly DEFAULT: "142 76% 36%";
        readonly light: "142 50% 92%";
        readonly dark: "142 76% 96%";
    };
    readonly caution: {
        readonly DEFAULT: "38 92% 50%";
        readonly light: "38 80% 92%";
        readonly dark: "38 92% 10%";
    };
    readonly negative: {
        readonly DEFAULT: "0 84% 60%";
        readonly light: "0 70% 95%";
        readonly dark: "0 0% 98%";
    };
    readonly info: {
        readonly DEFAULT: "217 91% 60%";
        readonly light: "217 70% 94%";
        readonly dark: "217 91% 98%";
    };
    readonly special: {
        readonly DEFAULT: "270 80% 60%";
        readonly light: "270 60% 95%";
        readonly dark: "270 80% 96%";
    };
    readonly neutral: {
        readonly DEFAULT: "190 80% 50%";
        readonly light: "190 60% 94%";
        readonly dark: "190 80% 96%";
    };
    readonly accent: {
        readonly DEFAULT: "25 95% 53%";
        readonly light: "25 80% 94%";
        readonly dark: "25 95% 96%";
    };
};
declare const fontFamily: {
    readonly sans: readonly ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"];
    readonly mono: readonly ["IBM Plex Mono", "ui-monospace", "monospace"];
};
declare const fontImport = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap";
declare const radius: {
    readonly DEFAULT: "0.75rem";
    readonly sm: "calc(0.75rem - 4px)";
    readonly md: "calc(0.75rem - 2px)";
    readonly lg: "0.75rem";
    readonly xl: "calc(0.75rem + 4px)";
    readonly "2xl": "calc(0.75rem + 8px)";
};
declare const container: {
    readonly sm: "640px";
    readonly md: "768px";
    readonly lg: "1024px";
    readonly xl: "1200px";
    readonly "2xl": "1400px";
};
declare const transitions: {
    readonly fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)";
    readonly base: "200ms cubic-bezier(0.4, 0, 0.2, 1)";
    readonly slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)";
};

export { brand, brandHex, container, fontFamily, fontImport, palette, radius, transitions };
