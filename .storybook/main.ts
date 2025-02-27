import Solid from 'vite-plugin-solid';

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-a11y"
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
  docs: {
    autodocs: true
  },
  staticDirs: ['../public'],
};

export default config;
