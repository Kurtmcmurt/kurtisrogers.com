import { Layout } from "@/helpers/layouts";
import {
  Home as HomeContent,
  About as AboutContent,
  NotFound as NotFoundContent
} from "@/data/content";
import { JSX } from "solid-js";

export const Navigation = (children?: JSX.Element[]) => [
  {
    path: "/",
    component: () => <Layout {...HomeContent} />,
  },
  {
    path: "/about",
    component: () => <Layout {...AboutContent} />,
  },
  {
    path: "/about-us/:user",
    component: () => <Layout meta={[]} components={[]} />,
  },
  {
    path: "*404",
    component: () => <Layout {...NotFoundContent} />,
  },
];
