import { JSX, Show, createMemo, createSignal, useTransition } from "solid-js";
import Navigation from "@/components/molecules/Navigation";
import Logo from "@/components/atoms/Logo";
import { main } from "@/data/navigations";
import "./style.css";
import Button from "@/components/atoms/Button";

type Item = {
  link: string;
  text: string;
};

type Props = {
  menuItems?: Item[];
  children?: JSX.Element[];
};

export default function Header({ children }: Readonly<Props>) {
  let mainNavigation: HTMLElement | undefined;
  let headerRef: HTMLHeadElement | undefined;
  let mainNavigationButton: HTMLButtonElement | undefined;

  const [pending, start] = useTransition();
  const [showNavigation, setShowNavigation] = createSignal(false);
  const [navButtonAttributes, setNavButtonAttributes] = createSignal({});

  const handleMenuItemFocusOnOpen = () => {
    if (mainNavigation?.hasChildNodes()) {
      const children = Array.from(mainNavigation.childNodes);
      const ul = children.find(
        (element: { nodeType: number; nodeName: string }) =>
          element.nodeType === Node.ELEMENT_NODE && element.nodeName === "UL"
      ) as HTMLUListElement;

      if (ul) {
        const firstMenuItem = ul.querySelector(
          "li:first-child a, li:first-child button"
        ) as HTMLElement;
        firstMenuItem?.focus();
      }
    }
  };

  const handleToggleNavigation = () =>
    start(() => {
      setShowNavigation(!showNavigation());
      setNavButtonAttributes({
        "aria-expanded": showNavigation(),
        "aria-controls": "navigation",
        "data-state": showNavigation() ? "open" : "closed"
      });
    }).then(() => {
      handleMenuItemFocusOnOpen();
    });

  const handleAttributes = createMemo(
    () => navButtonAttributes as unknown as { [key: string]: string | boolean }
  );

  const handleFocusOut = () => {
    // Small delay to allow focus to settle on new element
    setTimeout(() => {
      if (headerRef && !headerRef.contains(document.activeElement)) {
        handleToggleNavigation();
      }
    }, 0);
  };

  return (
    <header
      ref={headerRef}
      tabindex="-1"
      classList={{ "nav-pending": pending() }}
      onFocusOut={handleFocusOut}
    >
      <div class="content">
        <Logo variant="secondary" />
        <div class="navigation">{children}</div>
        <Button
          ref={mainNavigationButton}
          callback={handleToggleNavigation}
          attributes={handleAttributes()}
          outline
        >
          <span>{showNavigation() ? "Close" : "Menu"}</span>
        </Button>
      </div>
      <Show when={showNavigation()}>
        <Navigation ref={mainNavigation} classes="site-navigation" items={main} />
      </Show>
    </header>
  );
}
