import Banner from "./index";
import "./style.css";

export default {
  title: "Organisms/Banner",
  component: Banner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/solid/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/solid/configure/story-layout
    layout: "fullscreen"
  }
};

const propData = {
  title: "Example",
  children: (
    <>
      <p>My name is Kurtis Rogers, a proper Software Engineer from Bristol, UK</p>
      <ul>
        <li>Specialising in Frontend technology since 2018</li>
        <li>Expert in leading frameworks including serverside Node development (Express/Koa)</li>
        <li>
          Experienced in building and developing accessible themes in both Drupal and WordPress
        </li>
        <li>Effective and approachable mentor</li>
        <li>
          Team player, able to build robust yet relaxed relationships with colleagues and
          stakeholders alike
        </li>
      </ul>
      <p>Want to know more?</p>
      <a class="button" href="/about">
        Read more about me
      </a>
    </>
  ),
  backgroundImage: {
    data: {
      attributes: {
        alternativeText:
          "A photo of The Milky Way, lots of stars and some star-making gas clouds far far away...",
        url: "/images/pexels-jack-davis-86003658-9069564-thumbnail.webp",
        formats: {
          thumbnail: {
            src: "/images/pexels-jack-davis-86003658-9069564-thumbnail.webp"
          },
          small: {
            src: "/images/pexels-jack-davis-86003658-9069564-sm.webp",
            minWidth: 320
          },
          medium: {
            src: "/images/pexels-jack-davis-86003658-9069564-md.webp",
            minWidth: 768
          },
          large: {
            src: "/images/pexels-jack-davis-86003658-9069564-lg.webp",
            minWidth: 960
          },
          xlarge: {
            src: "/images/pexels-jack-davis-86003658-9069564-xl.webp",
            minWidth: 1420
          }
        }
      }
    }
  }
};

const Template = () => {
  return (
    <Banner title={propData.title} backgroundImage={propData.backgroundImage}>
      {propData.children}
    </Banner>
  );
};

export const Default = Template.bind({});
// Default.args = {
//   // Add any props you want to pass to the Header component
// };
