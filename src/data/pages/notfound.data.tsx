import Button from "@/components/atoms/Button";
import Banner from "@/components/organisms/Banner";

const NotFound = {
  title: "404",
  description: "Page has not been found",
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
        text: "404",
        headingLevel: 1,
        headingClass: "text-size-h2"
      },
      children: (
        <>
          <p>You're not meant to be here!</p>
          <Button variant="secondary" outline={true} href={{ url: "/" }}>
            <span>Take me home</span>
          </Button>
        </>
      )
    }
  ]
};

export default NotFound;
