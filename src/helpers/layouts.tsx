import { For, JSX, ValidComponent, Component } from "solid-js";
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
          {item => {
            const { name } = item.component as Component;
            const firstChildCheck = name.includes("Banner") && components[0] === item;

            const componentData = {
              ...item,
              firstChild: firstChildCheck
            };

            return <Dynamic {...componentData} />;
          }}
        </For>
        {props.children}
      </main>
      <Footer>
        <div>
          <Navigation label="Footer menu" classes={"light-background"} />
          <SkipLink id="header" isTag={true} name="header" visibleOnFocusOnly={true} />
        </div>
      </Footer>
    </>
  );
};
