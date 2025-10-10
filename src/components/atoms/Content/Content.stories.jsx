import Content from "./index";
import "./style.css";

export default {
  title: "Atoms/Content",
  component: Content,
  argTypes: {
    variant: {
      options: ["yellow", "white", "grey", "black", "red", "default", undefined],
      control: { type: "select" }
    },
    gridLayout: {
      options: ["grid", "content", undefined],
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

const Template = (args) => (
  <Content variant={args.variant} gridLayout={args.gridLayout}>
    {args.children}
  </Content>
);

export const Default = Template.bind({});
Default.args = {
  variant: "red",
  gridLayout: "content",
  children: <p>Hello, I'm some content!</p>
};
