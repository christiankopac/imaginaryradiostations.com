import mdx from "@mdx-js/rollup";
import netlify from "@netlify/vite-plugin";
import { solidStart } from "@solidjs/start/config";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      ...mdx({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
      enforce: "pre",
    },
    solidStart({
      extensions: ["mdx", "md"],
    }),
    netlify({
      build: { enabled: true },
      // No edge functions in this site; skip the Deno-based dev emulator.
      edgeFunctions: { enabled: false },
    }),
  ],
});
