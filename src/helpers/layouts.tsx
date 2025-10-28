import { For } from "solid-js";
import { Meta, Title } from "@solidjs/meta";
import { useLocation } from "@solidjs/router";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import SkipLink from "@/components/atoms/Skiplink";
import Navigation from "@/components/molecules/Navigation";
import Logo from "@/components/atoms/Logo";
import Socials from "@/components/molecules/Socials";
import { main } from "@/data/navigations";
import { LayoutSpacingDataType, layoutSpacingHandler } from "./layoutSpacingHandler";
import type { ImageResponse } from "@/types/branding";

import renderList from "./renderList";
export type ValidComponent = keyof typeof renderList; // "Banner" | "Content"

export const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === "enabled" ? true : false;

export type ComponentBlock = {
  type: ValidComponent;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any[]; // Add children to ComponentBlock
};

interface Props {
  title: string;
  description: string;
  image: {
    data: ImageResponse;
  };
  components: ComponentBlock[];
}

export const Layout = (props: Props) => {
  const { title, description, image, components } = props;
  const { pathname } = useLocation();
  const locationOrigin = window.location.origin;
  const locationHostname = window.location.hostname;
  const firstBannerIndex = components.findIndex(element => element.type === "banner");

  return (
    <>
      {/* TODO: SSR prep for dynamic meta tags */}
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
          {(item, index) => {
            const Component = renderList[item.type];

            return (
              <Component
                {...item}
                firstChild={index() === firstBannerIndex}
                style={layoutSpacingHandler(item.layoutSpacing as LayoutSpacingDataType)}
              />
            );
          }}
        </For>
      </main>
      <Footer>
        <div class="footer__socials">
          <Logo variant="secondary" />
          <Socials />
        </div>
        <div>
          <Navigation label="Footer menu" classes={"light-background"} items={main} />
          <SkipLink id="header" isTag={true} name="header" visibleOnFocusOnly={true} />
        </div>
      </Footer>
    </>
  );
};
