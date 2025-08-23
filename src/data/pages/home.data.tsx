import Button from "@/components/atoms/Button";
import Content from "@/components/atoms/Content";
// import Link from "@/components/atoms/Link";
import Banner from "@/components/organisms/Banner";

const HomeData = {
  meta: [
    {
      type: "title",
      content: "Home"
    },
    {
      type: "description",
      content: "This is some content describing the home page"
    }
  ],
  components: [
    {
      component: Banner,
      title: {
        text: "Hello.",
        headingLevel: "1"
      },
      children: (
        <>
          <p>
            My name is Kurtis Rogers and I'm an experienced fullstack software engineer from
            Bristol, UK.
          </p>
          <hr />
          <ul>
            <li>
              An expert in popular frontend frameworks including serverside Node development
              (Express/Koa)
            </li>
            <li>
              Effective and approachable mentor to less experienced colleagues, always willing to
              help folks where I can.
            </li>
            <li>
              A team player, able to build robust yet relaxed relationships with colleagues and
              stakeholders alike.
            </li>
          </ul>
          <Button
            variant="primary"
            outline={true}
            href={{ url: "https://www.linkedin.com/in/roguetrufflepig/", target: "_blank" }}
          >
            <span>Visit my LinkedIn</span>
          </Button>
          <p></p>
          <Button
            variant="secondary"
            href={{ url: "https://github.com/Kurtmcmurt/kurtisrogers.com", target: "_blank" }}
          >
            <span>GitHub</span>
          </Button>
        </>
      ),
      backgroundImage: {
        data: {
          attributes: {
            alternativeText:
              "A photo of The Milky Way, lots of stars and some star-making gas clouds far far away...",
            url: "/images/optimised/pexels-jack-davis-86003658-9069564-thumbnail.webp",
            formats: {
              thumbnail: {
                src: "/images/optimised/pexels-jack-davis-86003658-9069564-thumbnail.webp"
              },
              small: {
                src: "/images/optimised/pexels-jack-davis-86003658-9069564-sm.webp",
                minWidth: 320
              },
              medium: {
                src: "/images/optimised/pexels-jack-davis-86003658-9069564-md.webp",
                minWidth: 768
              },
              large: {
                src: "/images/optimised/pexels-jack-davis-86003658-9069564-lg.webp",
                minWidth: 960
              },
              xlarge: {
                src: "/images/optimised/pexels-jack-davis-86003658-9069564-xl.webp",
                minWidth: 1420
              }
            }
          }
        }
      },
      gridLayout: "wide"
    },
    {
      component: Content,
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sodales arcu. Ut nec
          imperdiet orci. Mauris ullamcorper lacus tincidunt dolor semper interdum. Nulla luctus ex
          vel volutpat ultricies. Mauris vel magna diam. Quisque non congue diam. Sed neque lacus,
          auctor vitae arcu eu, pellentesque condimentum lorem. Donec at rutrum mauris. Fusce
          molestie, metus vel aliquet elementum, felis dolor placerat nisi, a ultricies eros ipsum
          id lacus. Donec eget dolor lacus.
        </p>
      ),
      gridLayout: "wide",
      variant: "white"
    },
    {
      component: Content,
      children: (
        <p>
          Duis at malesuada justo. Maecenas egestas eget libero eget lobortis. Vivamus cursus
          viverra nisi non consectetur. Proin risus nisl, laoreet nec vulputate nec, posuere a enim.
          Morbi fringilla erat id tellus congue viverra. Suspendisse semper ligula nec rhoncus
          venenatis. Etiam semper iaculis felis, et ullamcorper risus porttitor quis. Cras auctor
          tempus lorem ac tristique.
        </p>
      ),
      gridLayout: "default"
    },
    {
      component: Content,
      children: (
        <div>
          <p>Some content for this section</p>
          <button>Find out more</button>
        </div>
      )
    }
  ]
};

export default HomeData;
