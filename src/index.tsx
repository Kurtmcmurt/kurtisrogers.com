/* @refresh reload */
// import { For, isServer, render } from "solid-js/web"; Tofu
import { For, render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { Navigation as NavData } from "@/data/routes";
import { MetaProvider } from "@solidjs/meta";

const root = document.getElementById("root");

render(
  () => (
    <MetaProvider>
      {/* <Router preload={true} url={isServer}> Tofu: SSR */}
      <Router preload={true}>
        <For each={NavData()}>
          {item => {
            return <Route path={item.path} component={item.component} />;
          }}
        </For>
      </Router>
    </MetaProvider>
  ),
  root!
);
