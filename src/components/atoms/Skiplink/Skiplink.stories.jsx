import SkipLink from "./index";
import "./style.css";

export default {
  title: "Atoms/Skiplink",
  component: SkipLink,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  decorators: [body => <div style="background:white;">{body}</div>]
};

export const Default = {
  args: {
    header: {
      id: "header",
      name: "navigation",
      isTag: true,
      visibleOnFocusOnly: false
    },
    main: {
      id: "main",
      name: "main content",
      isTag: true,
      visibleOnFocusOnly: false
    },
    footer: {
      id: "footer",
      name: "footer content",
      isTag: true,
      visibleOnFocusOnly: false
    },
  },
  render: args => (
    <div>
      <SkipLink {...args.header} />
      <SkipLink {...args.main} />
      <SkipLink {...args.footer} />
      <header tabindex="-1">
        <p>Header content</p>
        <button>Header button</button>
        <nav name="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main tabindex="-1">
        <section>Main content section</section>
        <section><button>Content button</button></section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, commodo at gravida id, rhoncus eget eros. Aliquam erat volutpat. Vivamus pulvinar tincidunt velit. Maecenas orci diam, semper non eros ut, egestas volutpat leo. Nam non dui pellentesque, tempor lectus vitae, venenatis justo. Duis sit amet magna elit. Nam vel lectus urna. Curabitur consequat enim in tellus blandit, a efficitur nulla varius. Aliquam luctus quam ullamcorper viverra venenatis. Nulla hendrerit sem efficitur, pellentesque augue vitae, porttitor purus.</p>

        <p>Ut molestie libero quis porta mattis. Nunc sed varius ipsum. Ut non erat scelerisque, euismod arcu nec, condimentum lorem. Nulla molestie magna et justo ullamcorper ullamcorper. Curabitur a pellentesque ex, nec iaculis ante. Nulla ullamcorper tincidunt velit vel gravida. Phasellus dignissim dolor ac nibh semper, et sodales felis rutrum. Suspendisse porta felis vitae lacus aliquam, sed fermentum mi pulvinar. Suspendisse eu rutrum felis, in commodo tellus. Sed nec facilisis nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nec volutpat urna. Vivamus sed turpis consectetur, aliquet arcu sed, malesuada diam. Sed interdum nisi sit amet pharetra accumsan. Integer lorem enim, vehicula vel massa ac, malesuada aliquet risus. Integer malesuada pulvinar ipsum, non posuere libero.</p>

        <p>Sed faucibus ullamcorper nunc auctor aliquet. Fusce orci est, faucibus ut rhoncus vitae, faucibus eu nisl. Vestibulum venenatis pharetra enim, vitae sodales lorem volutpat vitae. Vestibulum sollicitudin est nec ex consectetur, eget feugiat mauris fringilla. Quisque sed vehicula justo. Cras a nunc at ex tempor venenatis sed et nibh. Pellentesque sit amet felis euismod, ultrices massa pharetra, scelerisque urna. Duis nisl felis, placerat et ultrices eu, posuere vel quam. Donec suscipit velit mi, vel cursus nulla ullamcorper ut. Quisque lobortis, mauris ac scelerisque finibus, dolor risus pulvinar erat, at aliquam elit tortor nec enim. Aenean felis est, accumsan nec metus eu, finibus imperdiet leo. Sed dignissim, augue quis vulputate vulputate, orci nibh pellentesque nisi, in gravida felis mauris vel justo. Nam finibus nulla non tellus finibus, eu accumsan est pellentesque. Maecenas quis purus efficitur, iaculis est eu, cursus elit. Vestibulum tempor diam velit, vitae lacinia quam euismod at. Sed id sapien nibh.</p>
      </main>
      <footer tabindex="-1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero felis, commodo at gravida id, rhoncus eget eros. Aliquam erat volutpat. Vivamus pulvinar tincidunt velit. Maecenas orci diam, semper non eros ut, egestas volutpat leo. Nam non dui pellentesque, tempor lectus vitae, venenatis justo. Duis sit amet magna elit. Nam vel lectus urna. Curabitur consequat enim in tellus blandit, a efficitur nulla varius. Aliquam luctus quam ullamcorper viverra venenatis. Nulla hendrerit sem efficitur, pellentesque augue vitae, porttitor purus.</p>

        <p>Ut molestie libero quis porta mattis. Nunc sed varius ipsum. Ut non erat scelerisque, euismod arcu nec, condimentum lorem. Nulla molestie magna et justo ullamcorper ullamcorper. Curabitur a pellentesque ex, nec iaculis ante. Nulla ullamcorper tincidunt velit vel gravida. Phasellus dignissim dolor ac nibh semper, et sodales felis rutrum. Suspendisse porta felis vitae lacus aliquam, sed fermentum mi pulvinar. Suspendisse eu rutrum felis, in commodo tellus. Sed nec facilisis nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nec volutpat urna. Vivamus sed turpis consectetur, aliquet arcu sed, malesuada diam. Sed interdum nisi sit amet pharetra accumsan. Integer lorem enim, vehicula vel massa ac, malesuada aliquet risus. Integer malesuada pulvinar ipsum, non posuere libero.</p>

        <p>Sed faucibus ullamcorper nunc auctor aliquet. Fusce orci est, faucibus ut rhoncus vitae, faucibus eu nisl. Vestibulum venenatis pharetra enim, vitae sodales lorem volutpat vitae. Vestibulum sollicitudin est nec ex consectetur, eget feugiat mauris fringilla. Quisque sed vehicula justo. Cras a nunc at ex tempor venenatis sed et nibh. Pellentesque sit amet felis euismod, ultrices massa pharetra, scelerisque urna. Duis nisl felis, placerat et ultrices eu, posuere vel quam. Donec suscipit velit mi, vel cursus nulla ullamcorper ut. Quisque lobortis, mauris ac scelerisque finibus, dolor risus pulvinar erat, at aliquam elit tortor nec enim. Aenean felis est, accumsan nec metus eu, finibus imperdiet leo. Sed dignissim, augue quis vulputate vulputate, orci nibh pellentesque nisi, in gravida felis mauris vel justo. Nam finibus nulla non tellus finibus, eu accumsan est pellentesque. Maecenas quis purus efficitur, iaculis est eu, cursus elit. Vestibulum tempor diam velit, vitae lacinia quam euismod at. Sed id sapien nibh.</p>
      </footer>
    </div>
  )
};
