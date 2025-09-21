import Content from "@/components/atoms/Content";
import Banner from "@/components/organisms/Banner";

const BlogData = {
  title: "Blog",
  description: "My amazing blog",
  image: {
    data: {
      attributes: {
        alternativeText: "A photo of The Milky Way.",
        url: "/images/optimised/desert-night-sky-sand-dune-md.webp",
        formats: {
          medium: {
            src: "/images/optimised/desert-night-sky-sand-dune-md.webp",
            minWidth: 768
          },
          large: {
            src: "/images/optimised/desert-night-sky-sand-dune-lg.webp",
            minWidth: 960
          },
          xlarge: {
            src: "/images/optimised/desert-night-sky-sand-dune-xl.webp",
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
            url: "/images/optimised/desert-night-sky-sand-dune-md.webp",
            formats: {
              medium: {
                src: "/images/optimised/desert-night-sky-sand-dune-md.webp",
                minWidth: 768
              },
              large: {
                src: "/images/optimised/desert-night-sky-sand-dune-lg.webp",
                minWidth: 960
              },
              xlarge: {
                src: "/images/optimised/desert-night-sky-sand-dune-xl.webp",
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
