/* @refresh reload */
import { For, render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { Navigation as NavData } from "@/data/routes"
import { MetaProvider } from '@solidjs/meta';

import "css/global.css";

const root = document.getElementById('root');

render(
  () => <Router>
      <MetaProvider>
        <For each={NavData()}>
          {(item, index) => {
            return <Route path={item.path} component={item.component} />
          }}
        </For>
      </MetaProvider>
    </Router>, root!
);