import Banner from "@/components/organisms/Banner"

const NotFound = [
  {
    component: Banner,
    title: 'You\'re out of this world!',
    children: <>
      <p>I mean, this page doesn't exist! Don't think you're meant to be here!</p>
      <a class="button" href="/">Back to the homepage</a>
    </>,
  },
]

export default NotFound;