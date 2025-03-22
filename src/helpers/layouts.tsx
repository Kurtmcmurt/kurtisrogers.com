import { For, JSX, ValidComponent } from "solid-js";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { MetaProvider, Meta, Title } from "@solidjs/meta";
import { Dynamic } from "solid-js/web";
import SkipLink from "@/components/atoms/Skiplink";
import Navigation from "@/components/molecules/Navigation";

type MetaData = {
  type: string;
  content: string;
};

type ComponentBlock = {
  component: ValidComponent;
  [key: string]: unknown;
};

interface Props {
  components: ComponentBlock[];
  meta: MetaData[];
  children?: JSX.Element;
}

export const Layout = (props: Props) => {
  const { components, meta } = props;

  return (
    <>
      <MetaProvider>
        <For each={meta}>
          {item =>
            item.type === "title" ? (
              <Title>{`${item.content} | kurtisrogers.com`}</Title>
            ) : (
              <Meta name={item.type} content={item.content} />
            )
          }
        </For>
      </MetaProvider>
      <Header />
      <main id="maincontent" tabindex="-1">
        <For each={components} fallback={<div>Loading...</div>}>
          {item => <Dynamic {...item} />}
        </For>
        {props.children}
      </main>
      <Footer>
        <div>
          <Navigation />
          <SkipLink id="header" isTag={true} name="header" />
        </div>
      </Footer>
    </>
  );
};
