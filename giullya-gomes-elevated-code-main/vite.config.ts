
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  // Usa Vercel no deploy e preserva o comportamento
  // original da Lovable fora da Vercel.
  nitro: process.env.VERCEL
    ? { preset: "vercel" }
    : undefined,
});
