import { Layout } from "@/helpers/layouts";
import {
  Home as HomeContent,
  About as AboutContent,
  NotFound as NotFoundContent
} from "@/data/content";

export const Navigation = () => [
  {
    path: "/",
    component: () => <Layout {...HomeContent} />
  },
  {
    path: "/about",
    component: () => <Layout {...AboutContent} />
  },
  {
    path: "*404",
    component: () => <Layout {...NotFoundContent} />
  }
];
