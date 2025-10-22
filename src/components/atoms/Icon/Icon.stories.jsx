import Icon from "./index";
import "./style.css";
import { linkedin } from "../../../data/icons";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    fill: {
      control: { type: "color" }
    },
    size: {
      control: { type: "range", min: 60, max: 200, step: 20 }
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/solid/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/solid/configure/story-layout
    layout: "fullscreen"
  }
};

const Template = args => (
  <div style={`color: ${args.fill};`}>
    <Icon icondata={linkedin} height={args.size} width={args.size} viewbox="0 0 24 24" />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  fill: "#FFFFFF",
  size: 50
};
