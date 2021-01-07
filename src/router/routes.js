import Dashboard from "../pages/Dashboard.vue";
import Report from "../pages/Report.vue";
import Network from "../pages/Network.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    name: "Report",
    path: "/report",
    component: Report,
  },
  {
    name: "Network",
    path: "/network",
    component: Network,
  },
];

export default routes;
