import { For } from 'solid-js';
import Header from "@/components/organisms/Header"
import Footer from "@/components/organisms/Footer"
import { MetaProvider, Meta, Title } from "@solidjs/meta";

import { Dynamic } from 'solid-js/web';

type MetaData = {
  type: string;
  content: string;
}

type ComponentBlock = {
  component: any;
  [key: string]: any;
}

interface Props {
  components: ComponentBlock[];
  meta: MetaData[];
  children?: any;
}

export const Layout = (props: Props) => {
const { components, meta } = props;

  return (
    <>
      {/* global meta content */}
      <MetaProvider>
        <For each={meta}>
          {(item) => item.type === 'title' ? <Title>{`${item.content} | kurtisrogers.com`}</Title> : <Meta name={item.type} content={item.content} />}
        </For>
      </MetaProvider>
      {/* end of meta content */}
      <Header />
      <main id='main-content'>
        <For each={components} fallback={<div>Loading...</div>}>
          {(item) => <Dynamic {...item} />}
        </For>
        {props.children}
      </main>
      <Footer />
    </>
  );
};