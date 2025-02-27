import Content from "@/components/atoms/Content"
import Banner from "@/components/organisms/Banner"

const HomeData = {
  meta: [
    {
      type: 'title',
      content: 'Home',
    },
    {
      type: 'description',
      content: 'This is some content describing the home page',
    }
  ],
  components: [
    {
      component: Banner,
      title: 'Hello.',
      children: <>
        <p>My name is Kurtis Rogers, a proper Software Engineer from Bristol, UK</p>
        <ul>
          <li>Specialising in Frontend technology since 2018</li>
          <li>Expert in leading frameworks including serverside Node development (Express/Koa)</li>
          <li>Experienced in building and developing accessible themes in both Drupal and WordPress</li>
          <li>Effective and approachable mentor</li>
          <li>Team player, able to build robust yet relaxed relationships with colleagues and stakeholders alike</li>
        </ul>
        <p>Want to know more?</p>
        <a class="button" href="/about">Read more about me</a>
      </>,
      backgroundImage: {
        data: {
          attributes: {
            alternativeText: 'A photo of The Milky Way, lots of stars and some star-making gas clouds far far away...',
            url: '/images/milkyway-galaxy-thumbnail.webp',
            formats: {
              thumbnail: {
                src: '/images/milkyway-galaxy-thumbnail.webp',
              },
              small: {
                src: '/images/milkyway-galaxy-sm.webp',
                minWidth: 320,
              },
              medium: {
                src: '/images/milkyway-galaxy-md.webp',
                minWidth: 768,
              },
              large: {
                src: '/images/milkyway-galaxy-lg.webp',
                minWidth: 960,
              },
              xlarge: {
                src: '/images/milkyway-galaxy-xl.webp',
                minWidth: 1420,
              },
            },
          },
        },
      },
      gridLayout: "wide",
    },
    {
      component: Content,
      content:
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sodales arcu. Ut nec imperdiet orci. Mauris ullamcorper lacus tincidunt dolor semper interdum. Nulla luctus ex vel volutpat ultricies. Mauris vel magna diam. Quisque non congue diam. Sed neque lacus, auctor vitae arcu eu, pellentesque condimentum lorem. Donec at rutrum mauris. Fusce molestie, metus vel aliquet elementum, felis dolor placerat nisi, a ultricies eros ipsum id lacus. Donec eget dolor lacus.</p>,
      gridLayout: "wide",
      backgroundColor: "white",
    },
    {
      component: Content,
      content: <p>Duis at malesuada justo. Maecenas egestas eget libero eget lobortis. Vivamus cursus viverra nisi non consectetur. Proin risus nisl, laoreet nec vulputate nec, posuere a enim. Morbi fringilla erat id tellus congue viverra. Suspendisse semper ligula nec rhoncus venenatis. Etiam semper iaculis felis, et ullamcorper risus porttitor quis. Cras auctor tempus lorem ac tristique.</p>,
      gridLayout: "full",
    },
    {
      component: Content,
      content:
        <div>
          <p>Some content for this section</p>
          <button>Find out more</button>
        </div>,
    },
  ]
}

export default HomeData;