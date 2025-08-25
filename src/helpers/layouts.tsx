import { For, JSX, ValidComponent, Component } from "solid-js";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { MetaProvider, Meta, Title } from "@solidjs/meta";
import { Dynamic } from "solid-js/web";
import SkipLink from "@/components/atoms/Skiplink";
import Navigation from "@/components/molecules/Navigation";
import { main } from "@/data/navigations";
import { LayoutSpacingDataType, layoutSpacingHandler } from "./layoutSpacingHandler";

export const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === "enabled" ? false : true;

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
      <SkipLink id="main" name="main content" isTag={true} visibleOnFocusOnly={true} />
      <Header />
      <main id="maincontent" tabindex="-1">
        <For each={components}>
          {item => {
            const { name } = item.component as Component;
            const firstChildCheck = name.includes("Banner") && components[0] === item;

            const componentData = {
              ...item,
              firstChild: firstChildCheck,
              ...layoutSpacingHandler(item.layoutSpacing as LayoutSpacingDataType)
            };

            return <Dynamic {...componentData} />;
          }}
        </For>
        {props.children}
      </main>
      <Footer>
        <Navigation label="Footer menu" classes={"light-background"} items={main} />
        <SkipLink id="header" isTag={true} name="header" visibleOnFocusOnly={true} />
      </Footer>
    </>
  );
};
