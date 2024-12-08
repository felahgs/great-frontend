import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        {
          name: "Light",
          value: "#ffffff",
        },
        {
          name: "Dark",
          value: "#18181b",
        },
        {
          name: "Gray",
          value: "#ebebeb",
        },
      ],
      default: "Gray",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

export default preview;
