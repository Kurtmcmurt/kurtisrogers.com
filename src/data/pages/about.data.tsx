import Content from "@/components/atoms/Content"
import Banner from "@/components/organisms/Banner"

const AboutData = [
  {
    component: Banner,
    title: 'About',
    children: <>
      <p>I love space.</p>
      <p>I love the mystery which surrounds space.</p>
    </>,
    backgroundImage: {
      src: 'https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Soemthing',
    },
    gridLayout: "wide",
  },
  {
    component: Content,
    content: 
    <>
        <h2>Classic nerd.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sodales arcu. Ut nec imperdiet orci. Mauris ullamcorper lacus tincidunt dolor semper interdum. Nulla luctus ex vel volutpat ultricies. Mauris vel magna diam. Quisque non congue diam. Sed neque lacus, auctor vitae arcu eu, pellentesque condimentum lorem. Donec at rutrum mauris. Fusce molestie, metus vel aliquet elementum, felis dolor placerat nisi, a ultricies eros ipsum id lacus. Donec eget dolor lacus.</p>
      </>,
    backgroundColor: "white",
  },
]

export default AboutData;