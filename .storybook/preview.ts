import "public/css/global.css";

import { render } from "solid-js/web";

export const decorators = [
  (Story) => {
    const solidRoot = document.createElement("div");

    render(Story, solidRoot);

    return solidRoot;
  },
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
