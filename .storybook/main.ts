import Solid from 'vite-plugin-solid';

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/html-vite",
    options: {}
  },

  async viteFinal(config, { configType }) {
    config.plugins.unshift(
      Solid({ hot: false })
    );
    return config;
  },

  staticDirs: ['../public']
};

export default config;
