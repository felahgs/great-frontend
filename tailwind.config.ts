import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: colors.neutral[900],
        "primary-hover": colors.neutral[950],
        " primary-invert": colors.white,
        secondary: colors.neutral[600],
        tertiary: colors.neutral[500],
        brand: colors.indigo[700],
        disabled: colors.neutral[400],
        error: colors.red[600],
        "error-emphasize": colors.red[800],
        success: colors.green[700],
        warning: colors.amber[700],
      },
      backgroundColor: {
        primary: colors.white,
        "primary-inverted": colors.neutral[950],
        "primary-hover": colors.neutral[50],
        secondary: colors.gray[200],
        "secondary-hover": colors.gray[300],
        tertiary: colors.neutral[50],
        disabled: colors.neutral[100],
        "disabled-emphasize": colors.gray[100],
        "brand-primary": colors.indigo[700],
        "brand-primary-emphasize": colors.indigo[800],
        error: colors.red[600],
        "error-emphasize": colors.red[700],
        "error-subtle": colors.red[50],
        "success-subtle": colors.green[50],
        "brand-subtle": colors.indigo[50],
        "neutral-subtle": colors.gray[50],
        "warning-subtle": colors.amber[50],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        NotoSans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
