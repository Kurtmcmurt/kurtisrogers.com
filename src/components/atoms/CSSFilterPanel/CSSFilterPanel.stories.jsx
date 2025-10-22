import CSSFilterPanel from "./index";
import "./style.css";

export default {
  title: "Atoms/CSSFilterPanel",
  component: CSSFilterPanel,
  argTypes: {
    variant: {
      options: ["blur"],
      control: { type: "select" }
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/solid/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/solid/configure/story-layout
    layout: "fullscreen"
  }
};

const Template = args => <CSSFilterPanel variant={args.variant}>{args.children}</CSSFilterPanel>;

export const Default = Template.bind({});
Default.args = {
  variant: "blur",
  children: <p class="text-white">Hello, I'm some content!</p>
};
