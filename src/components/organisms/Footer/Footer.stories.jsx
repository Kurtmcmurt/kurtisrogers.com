import Footer from "./index";
import "./style.css";

export default {
  title: "Organisms/Footer",
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/solid/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/solid/configure/story-layout
    layout: "fullscreen"
  }
};

const Template = () => <Footer />;

export const Default = Template.bind({});
// Default.args = {
//   // Add any props you want to pass to the Header component
// };
