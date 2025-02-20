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
    component: () => <Layout components={HomeContent} />,
  },
  {
    path: "/about",
    component: () => <Layout components={AboutContent} />,
  },
  {
    path: "/about-us/:user",
    component: () => <Layout components={[]} />,
  },
  {
    path: "*",
    component: () => <Layout components={NotFoundContent} />,
  },
];
