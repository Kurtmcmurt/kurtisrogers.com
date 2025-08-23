import { JSX, Show } from "solid-js";
import Navigation from "@/components/molecules/Navigation";
import Logo from "@/components/atoms/Logo";
import { main } from "@/data/navigations";
import "./style.css";
import { MAINTENANCE_MODE } from "@/helpers/layouts";

type Item = {
  link: string;
  text: string;
};

type Props = {
  menuItems?: Item[];
  children?: JSX.Element[];
};

export default function Header({ children }: Readonly<Props>) {
  return (
    <>
      <header tabindex="-1">
        <div class="content">
          <Logo variant="secondary" />
          <div class="navigation">
            <Show when={MAINTENANCE_MODE}>
              <Navigation classes={"site-navigation"} items={main} />
            </Show>
            {children}
          </div>
        </div>
      </header>
    </>
  );
}
