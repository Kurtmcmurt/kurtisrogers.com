import { JSX, Show, createMemo, createSignal, useTransition } from "solid-js";
import Navigation from "@/components/molecules/Navigation";
import Logo from "@/components/atoms/Logo";
import { main } from "@/data/navigations";
import "./style.css";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import icons from "@/data/icons";

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

  const handleToggleNavigation = () => {
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
  };

  const handleAttributes = createMemo(
    () => navButtonAttributes as unknown as { [key: string]: string | boolean }
  );

  const handleMenuFocusOut = () => {
    setTimeout(() => {
      const newFocusTarget = document.activeElement;
      const isWithinNavigation = mainNavigation?.contains(newFocusTarget as Node);

      if (!isWithinNavigation && showNavigation()) {
        handleToggleNavigation();
      }
    }, 0);
  };

  window.addEventListener("keydown", (e: KeyboardEvent) => {
    if (showNavigation() && e.key === "Escape") handleToggleNavigation();
  });

  setNavButtonAttributes({
    "aria-expanded": showNavigation(),
    "aria-controls": "navigation",
    "data-state": showNavigation() ? "open" : "closed"
  });

  return (
    <header tabindex="-1" classList={{ "nav-pending": pending() }} onFocusOut={handleMenuFocusOut}>
      <div class="content">
        <Logo variant="secondary" />
        <div class="navigation">{children}</div>
        <Button
          callback={handleToggleNavigation}
          attributes={handleAttributes()}
          outline
          variant="secondary"
          icon
        >
          <span class="sr-only">{showNavigation() ? "Close Menu" : "Menu"}</span>
          <Icon width={50} height={38} viewbox={"0 0 100 100"} icondata={icons.hamburger} />
        </Button>
      </div>
      <Show when={showNavigation()}>
        <Navigation ref={mainNavigation} classes="site-navigation fade--in_down" items={main} />
      </Show>
    </header>
  );
}
