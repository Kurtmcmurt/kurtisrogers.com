import Logo from "./index";
import "./style.css";

export default {
  title: "Atoms/Logo",
  component: Logo,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: "radio" }
    },
    text: {
      control: { type: "text" }
    },
    isButton: {
      control: { type: "none" }
    }
  },
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  },
};

export const Default = {
  args: {
    isButton: true,
    variant: "primary",
    text: "Kurtis Rogers",
  },
  render: (args) => <Logo {...args} />
};
