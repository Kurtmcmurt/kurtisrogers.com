import Button from "@/components/atoms/Button";
import Banner from "@/components/organisms/Banner";
import Content from "@/components/atoms/Content";

const MaintenanceModeData = {
  title: "Maintenance page",
  description:
    "This is the maintenance page. It usually shows up when the site is under active development",
  image: {
    data: {
      attributes: {
        alternativeText: "A photo of The Milky Way.",
        url: "/images/optimised/milkyway-galaxy-md.webp",
        formats: {
          medium: {
            src: "/images/optimised/milkyway-galaxy-md.webp",
            minWidth: 768
          },
          large: {
            src: "/images/optimised/milkyway-galaxy-lg.webp",
            minWidth: 960
          },
          xlarge: {
            src: "/images/optimised/milkyway-galaxy-xl.webp",
            minWidth: 1420
          }
        }
      }
    }
  },
  components: [
    {
      component: Banner,
      title: {
        text: "Software Engineer",
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
              A team player, able to build robust yet relaxed relationships with all stakeholders.
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
              "A photo of The Milky Way, taken from the surface of Earth in a heavily wooded area. Teh silouhette of trees wrap the image with the sky in the background emphasising the expanse of our galaxy.",
            url: "/images/optimised/milkyway-galaxy-forest-md.webp",
            formats: {
              medium: {
                src: "/images/optimised/milkyway-galaxy-forest-md.webp",
                minWidth: 768
              },
              large: {
                src: "/images/optimised/milkyway-galaxy-forest-lg.webp",
                minWidth: 960
              },
              xlarge: {
                src: "/images/optimised/milkyway-galaxy-forest-xl.webp",
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
        <>
          <h2>Work in progress</h2>
        </>
      ),
      variant: "red",
      layoutSpacing: {
        paddingTop: "md",
        paddingBottom: "md",
        marginTop: "xs"
      },
      gridLayout: "wide"
    },
    {
      component: Content,
      children: (
        <>
          <p>
            In the meantime if you wish to get a hold of me{" "}
            <a href="https://linktr.ee/kurtisrogers" target="_blank">
              check out my linkt.ree
            </a>
          </p>
        </>
      ),
      variant: "white",
      layoutSpacing: {
        marginBottom: "xs"
      },
      gridLayout: "wide"
    }
  ]
};

export default MaintenanceModeData;
