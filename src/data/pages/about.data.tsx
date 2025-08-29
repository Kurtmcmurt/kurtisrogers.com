import Content from "@/components/atoms/Content";
import Banner from "@/components/organisms/Banner";

const AboutData = {
  meta: [
    {
      type: "title",
      content: "About"
    },
    {
      type: "description",
      content: "This is some content describing the about page"
    }
  ],
  components: [
    {
      component: Banner,
      title: {
        text: "About",
        headingLevel: "2",
        headingClass: "text-size-h3"
      },
      children: (
        <>
          <p>As well as having a keen interest in web technologies, I'm also REALLY into space.</p>
        </>
      ),
      backgroundImage: {
        data: {
          attributes: {
            alternativeText:
              "A photo of The Milky Way, lots of stars and some star-making gas clouds far far away...",
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
      gridLayout: "wide"
    },
    {
      component: Content,
      children: (
        <>
          <h2>Experience</h2>
          <p>
            I have been working as a web developer in the South West of England for over the past
            decade.
          </p>
        </>
      ),
      variant: "yellow",
      layoutSpacing: {
        paddingTop: "xl",
        paddingBottom: "xl",
        marginBottom: "xs"
      }
    }
  ]
};

export default AboutData;
