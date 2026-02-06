import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    preset: "src/preset.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  external: ["tailwindcss"],
  // Copy CSS files to dist
  onSuccess: async () => {
    const fs = await import("fs/promises");
    await fs.copyFile("src/tokens.css", "dist/tokens.css");
    await fs.copyFile("src/base.css", "dist/base.css");
  },
});
