import "public/css/global.css";

import { render } from "solid-js/web";
import { themes } from "storybook/internal/theming";

export const decorators = [
  (Story) => {
    const solidRoot = document.createElement("div");

    render(Story, solidRoot);

    return solidRoot;
  },
];

export const parameters = {
  docs: {
    theme: themes.dark
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
