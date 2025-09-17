import Content from "@/components/atoms/Content";
import Banner from "@/components/organisms/Banner";

const ContactData = {
  title: "Contact",
  description: "Want a chat? Get in touch!",
  image: {
    data: {
      attributes: {
        alternativeText: "A photo of The Milky Way.",
        url: "/images/optimised/deepspace-md.webp",
        formats: {
          medium: {
            src: "/images/optimised/deepspace-md.webp",
            minWidth: 768
          },
          large: {
            src: "/images/optimised/deepspace-lg.webp",
            minWidth: 960
          },
          xlarge: {
            src: "/images/optimised/deepspace-xl.webp",
            minWidth: 1420
          }
        }
      }
    }
  },
  meta: [
    {
      type: "name",
      title: "title",
      content: "Contact"
    },
    {
      type: "name",
      title: "description",
      content: "Get in touch with me and let's talk tech"
    }
  ],
  components: [
    {
      component: Banner,
      title: {
        text: "Contact",
        headingLevel: "2"
      },
      children: (
        <>
          <p>Fancy a chat? About tech? Or speciality biscuits? Get in touch!</p>
        </>
      ),
      backgroundImage: {
        data: {
          attributes: {
            alternativeText: "A photo of The Milky Way.",
            url: "/images/optimised/deepspace-md.webp",
            formats: {
              medium: {
                src: "/images/optimised/deepspace-md.webp",
                minWidth: 768
              },
              large: {
                src: "/images/optimised/deepspace-lg.webp",
                minWidth: 960
              },
              xlarge: {
                src: "/images/optimised/deepspace-xl.webp",
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

export default ContactData;
