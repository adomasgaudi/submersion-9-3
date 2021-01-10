import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import Outdated from "../views/Outdated.vue";
import Giants from "../views/Giants.vue";
import Rookies from "../views/giants/Rookies.vue";
import OldGuys from "../views/giants/OldGuys.vue";
import Wise from "../views/giants/Wise.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/home", name: "Home", component: Home },
  { path: "/", name: "Welcome", component: Welcome },
  { path: "/outdated", name: "Outdated", component: Outdated },
  { path: "/giants", name: "Giants", component: Giants },
  { path: "/rookies", name: "Rookies", component: Rookies },
  { path: "/oldGuys", name: "OldGuys", component: OldGuys },
  { path: "/wise", name: "Wise", component: Wise }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
