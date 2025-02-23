import Banner from "@/components/organisms/Banner"

const NotFound = {
  meta: [
    {
      type: 'title',
      content: '404',
    },
    {
      type: 'description',
      content: 'This is some content describing the 404 page',
    }
  ],
  components: [
    {
      component: Banner,
      title: "404",
      children: <>
        <h2>You're out of this world!</h2>
        <p>I mean, this page doesn't exist - you're not meant to be here!</p>
        <a class="button" href="/">Go back to the homepage</a>
      </>,
    },
  ]
};

export default NotFound;