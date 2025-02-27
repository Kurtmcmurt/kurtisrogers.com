import Content from "./index";
import "./style.css";

export default {
  title: "Atoms/Content",
  component: Content,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/solid/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/solid/configure/story-layout
    layout: "fullscreen"
  }
};

const Template = () => {
  return (
    <>
      <Content backgroundColor="yellow">
        <p>Hello, I'm some content!</p>
      </Content>
      <Content backgroundColor="white">
        <p>Hello, I'm some content!</p>
      </Content>
      <Content backgroundColor="grey">
        <p>Hello, I'm some content!</p>
      </Content>
      <Content backgroundColor="black">
        <p>Hello, I'm some content!</p>
      </Content>
      <Content backgroundColor="red">
        <p>Hello, I'm some content!</p>
      </Content>
      <Content>
        <p>Hello, I'm some content!</p>
      </Content>
    </>
  );
};

export const Default = Template.bind({});
// Default.args = {
//   // Add any props you want to pass to the Header component
// };
