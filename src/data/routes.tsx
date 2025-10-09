import { Layout, MAINTENANCE_MODE } from "@/helpers/layouts";
import {
  Home as HomeContent,
  MaintenanceMode as MaintenanceModeContent,
  About as AboutContent,
  Blog as BlogContent,
  Contact as ContactContent,
  NotFound as NotFoundContent
} from "@/data/content";

import type { ComponentBlock } from "@/helpers/layouts";

const handleMaintenanceContent = MAINTENANCE_MODE ? MaintenanceModeContent : HomeContent;

export const Navigation = () => [
  {
    path: "/",
    component: () => (
      <Layout
        {...handleMaintenanceContent}
        components={handleMaintenanceContent.components as ComponentBlock[]}
      />
    )
  },
  {
    path: "/about",
    component: () => (
      <Layout {...AboutContent} components={AboutContent.components as ComponentBlock[]} />
    )
  },
  {
    path: "/blog",
    component: () => (
      <Layout {...BlogContent} components={BlogContent.components as ComponentBlock[]} />
    )
  },
  {
    path: "/contact",
    component: () => (
      <Layout {...ContactContent} components={ContactContent.components as ComponentBlock[]} />
    )
  },
  {
    path: "*404",
    component: () => (
      <Layout {...NotFoundContent} components={NotFoundContent.components as ComponentBlock[]} />
    )
  }
];
