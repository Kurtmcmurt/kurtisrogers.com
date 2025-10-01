import { For, JSX, ValidComponent, Component } from "solid-js";
import { Meta, Title } from "@solidjs/meta";
import { useLocation } from "@solidjs/router";
import { Dynamic } from "solid-js/web";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import SkipLink from "@/components/atoms/Skiplink";
import Navigation from "@/components/molecules/Navigation";
import { main } from "@/data/navigations";
import { LayoutSpacingDataType, layoutSpacingHandler } from "./layoutSpacingHandler";
import type { ImageResponse } from "@/types/branding";

export const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === "enabled" ? true : false;

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
  components: ComponentBlock[];
  children?: JSX.Element;
}

export const Layout = (props: Props) => {
  const { title, description, image, components } = props;
  const { pathname } = useLocation();
  const locationOrigin = window.location.origin;
  const locationHostname = window.location.hostname;

  return (
    <>
      <Title>{`${title} | kurtisrogers.com`}</Title>
      <Meta name="description" content={description ?? ""} />
      <Meta property="og:url" content={`${locationOrigin + pathname}`} />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:image" content={`${locationOrigin + image.data.attributes.url}`} />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta property="twitter:domain" content={locationHostname} />
      <Meta property="twitter:url" content={`${locationOrigin + pathname}`} />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={`${locationOrigin + image.data.attributes.url}`} />

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
