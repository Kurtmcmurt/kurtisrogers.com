import Button from "@/components/atoms/Button";
import Banner from "@/components/organisms/Banner";

const MaintenanceModeData = {
  meta: [
    {
      type: "title",
      content: "Home"
    },
    {
      type: "description",
      content: "Welcome to the website for Kurtis Rogers, Senior Software Engineer"
    }
  ],
  components: [
    {
      component: Banner,
      title: {
        text: "Hello.",
        headingLevel: "1",
        headingClass: "text-size-h2"
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
    }
  ]
};

export default MaintenanceModeData;
