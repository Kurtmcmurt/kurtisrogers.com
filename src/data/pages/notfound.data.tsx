import Button from "@/components/atoms/Button";
import Banner from "@/components/organisms/Banner";

const NotFound = {
  meta: [
    {
      type: "title",
      content: "404"
    },
    {
      type: "description",
      content: "This is some content describing the 404 page"
    }
  ],
  components: [
    {
      component: Banner,
      title: {
        text: "404",
        headingLevel: 1,
        headingClass: "text-size-h3"
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
