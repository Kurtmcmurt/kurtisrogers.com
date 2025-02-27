import Header from "@/components/organisms/Header";
import "./style.css";

export default {
  title: "Example/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/solid/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/solid/configure/story-layout
    layout: "fullscreen"
  }
};

const Template = () => {
  return (
    <header>
      <a href="#main-content" class="button content-skipper">
        Skip to main content
      </a>
      <div class="content">
        <a href="/" class="logo text-white">
          <strong>Kurtis Rogers</strong>
        </a>
        <div>
          <nav class="site-navigation">
            <ul>
              <li>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Work</a>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export const Default = Template.bind({});
// Default.args = {
//   // Add any props you want to pass to the Header component
// };
