import { Layout, MAINTENANCE_MODE } from "@/helpers/layouts";
import {
  Home as HomeContent,
  MaintenanceMode as MaintenanceModeContent,
  About as AboutContent,
  NotFound as NotFoundContent
} from "@/data/content";

const handleMaintenanceContent = !MAINTENANCE_MODE ? MaintenanceModeContent : HomeContent;

export const Navigation = () => [
  {
    path: "/",
    component: () => <Layout {...handleMaintenanceContent} />
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
