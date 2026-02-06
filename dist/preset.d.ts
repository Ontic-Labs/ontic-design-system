import { Config } from 'tailwindcss';

/**
 * Ontic Tailwind Preset
 *
 * A Tailwind CSS preset containing Ontic design tokens.
 * Works with Tailwind CSS v3.4+ and v4+.
 *
 * Usage in tailwind.config.ts:
 * ```ts
 * import onticPreset from "@ontic-labs/design-system/preset";
 *
 * export default {
 *   presets: [onticPreset],
 *   // your config...
 * }
 * ```
 */

declare const preset: Partial<Config>;

export { preset as default };
