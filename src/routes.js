import { Home, Login, Dashboard, NotFound } from "./pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
