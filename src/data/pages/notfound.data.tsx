import Button from "@/components/atoms/Button";
import Banner from "@/components/organisms/Banner";

const NotFound = {
  meta: [
    {
      type: "name",
      title: "title",
      content: "Not found"
    },
    {
      type: "name",
      title: "description",
      content: "The page you're looking for doesn't exist."
    }
  ],
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
