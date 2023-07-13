import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Figtree: "Figtree, sans-serif",
      },
      boxShadow: {
        inset: " inset 0px 0px 41px 18px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
    require("tailwindcss-accent")({
      colors: ["violet", "blue", "orange"],
      root: "violet",
    }),
    // ...
  ],
} satisfies Config;
