import { For, JSX, ValidComponent, Component } from "solid-js";
import { MetaProvider, Meta, Title } from "@solidjs/meta";
import { useLocation } from "@solidjs/router";
import { Dynamic } from "solid-js/web";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import SkipLink from "@/components/atoms/Skiplink";
import Navigation from "@/components/molecules/Navigation";
import MetaCore from "@/components/atoms/MetaCore";
import { main } from "@/data/navigations";
import { LayoutSpacingDataType, layoutSpacingHandler } from "./layoutSpacingHandler";
import type { ImageResponse } from "@/types/branding";

export const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === "enabled" ? true : false;

type MetaData = {
  title: string;
  [key: string]: string | boolean;
  content: string;
};

type ComponentBlock = {
  component: ValidComponent;
  [key: string]: unknown;
};

interface Props {
  title: string;
  description: string;
  image: {
    data: ImageResponse;
  };
  meta: MetaData[];
  components: ComponentBlock[];
  children?: JSX.Element;
}

export const Layout = (props: Props) => {
  const { title, description, image, components, meta } = props;
  const { pathname } = useLocation();
  const locationOrigin = window.location.origin;
  const locationHostname = window.location.hostname;

  return (
    <>
      <MetaProvider>
        {/* dynamic meta tags */}
        <For each={meta}>
          {({ type, title, content }) =>
            type === "title" ? (
              <Title>{`${content} | kurtisrogers.com`}</Title>
            ) : (
              <Meta {...{ [`${type}`]: title, content: content }} />
            )
          }
        </For>
        <MetaCore
          url={`${locationOrigin + pathname}`}
          domain={locationHostname}
          title={title}
          description={description}
          image={`${locationOrigin + image.data.attributes.url}`}
        />
      </MetaProvider>
      <SkipLink id="header" name="navigation" isTag={true} visibleOnFocusOnly={true} />
      <SkipLink id="main" name="main content" isTag={true} visibleOnFocusOnly={true} />
      <SkipLink id="footer" name="footer" isTag={true} visibleOnFocusOnly={true} />
      <Header />
      <main id="maincontent" tabindex="-1">
        <For each={components}>
          {item => {
            const { name } = item.component as Component;
            const firstChildCheck = name.endsWith("Banner") && components[0] === item;

            const componentData = {
              ...item,
              firstChild: firstChildCheck,
              style: layoutSpacingHandler(item.layoutSpacing as LayoutSpacingDataType)
            };

            return <Dynamic {...componentData} />;
          }}
        </For>
        {props.children}
      </main>
      <Footer>
        <div>
          <Navigation label="Footer menu" classes={"light-background"} items={main} />
          <SkipLink id="header" isTag={true} name="header" visibleOnFocusOnly={true} />
        </div>
      </Footer>
    </>
  );
};
