import Content from "@/components/atoms/Content";
import Banner from "@/components/organisms/Banner";

const BlogData = {
  meta: [
    {
      type: "name",
      title: "title",
      content: "Blog"
    },
    {
      type: "name",
      title: "description",
      content: "Welcome to my blog"
    }
  ],
  components: [
    {
      component: Banner,
      title: {
        text: "Blog",
        headingLevel: "2"
      },
      children: (
        <>
          <p>
            Sometimes I post interesting bits of content on the web. Most of the time I don't, the
            fact that anything is here is nothing short of a minor miracle.
          </p>
        </>
      ),
      backgroundImage: {
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
      gridLayout: "wide"
    },
    {
      component: Content,
      children: <h2>Awaiting service</h2>,
      variant: "grey",
      layoutSpacing: {
        paddingTop: "lg",
        paddingBottom: "lg",
        marginTop: "xs",
        marginBottom: "xs"
      },
      gridLayout: "wide"
    }
  ]
};

export default BlogData;
