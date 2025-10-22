import Button from "./index";

export default {
  title: "Atoms/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/solid/writing-docs/docs-page
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" }
    }
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/solid/configure/story-layout
    layout: "fullscreen"
  }
};

const Template = args => <Button {...args}>{args.text}</Button>;

export const Default = Template.bind({});
Default.args = {
  text: "Click me!",
  variant: "primary",
  outline: false
};
