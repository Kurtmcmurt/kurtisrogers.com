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
        <>
          <h2>Experience</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sodales arcu. Ut
            nec imperdiet orci. Mauris ullamcorper lacus tincidunt dolor semper interdum. Nulla
            luctus ex vel volutpat ultricies. Mauris vel magna diam. Quisque non congue diam. Sed
            neque lacus, auctor vitae arcu eu, pellentesque condimentum lorem. Donec at rutrum
            mauris. Fusce molestie, metus vel aliquet elementum, felis dolor placerat nisi, a
            ultricies eros ipsum id lacus. Donec eget dolor lacus.
          </p>
        </>
      ),
      variant: "yellow",
      layoutSpacing: {
        paddingTop: "xl",
        paddingBottom: "xl"
      },
      gridLayout: "wide"
    }
  ]
};

export default AboutData;
