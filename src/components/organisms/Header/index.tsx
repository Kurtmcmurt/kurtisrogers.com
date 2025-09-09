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
  const [pending, start] = useTransition();
  const [showNavigation, setShowNavigation] = createSignal(false);
  const [navButtonAttributes, setNavButtonAttributes] = createSignal({});

  const handleShowNavigation = () =>
    start(() => {
      setShowNavigation(!showNavigation());
      setNavButtonAttributes({
        "aria-expanded": showNavigation(),
        "aria-controls": "navigation",
        "data-state": showNavigation() ? "open" : "closed"
      });
    });

  const handleAttributes = createMemo(
    () => navButtonAttributes as unknown as { [key: string]: string | boolean }
  );

  return (
    <header tabindex="-1" classList={{ "nav-pending": pending() }}>
      <div class="content">
        <Logo variant="secondary" />
        <div class="navigation">{children}</div>
        <Button callback={handleShowNavigation} attributes={handleAttributes()}>
          <span>{showNavigation() ? "Close" : "Menu"}</span>
        </Button>
      </div>
      <Show when={showNavigation()}>
        <Navigation classes="site-navigation" items={main} />
      </Show>
    </header>
  );
}
