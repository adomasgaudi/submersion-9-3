import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Map from "../views/Map.vue";
import Welcome from "../views/Welcome.vue";
import Outdated from "../views/Outdated.vue";
import Giants from "../views/Giants.vue";
import Rookies from "../views/giants/Rookies.vue";
import OldGuys from "../views/giants/OldGuys.vue";
import Wise from "../views/giants/Wise.vue";
import Articles from "../views/Articles.vue";
import Complex from "../views/articles/learning/Complex.vue";
import Immersion from "../views/articles/learning/Immersion.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/map", name: "Map", component: Map },
  { path: "/", name: "Welcome", component: Welcome, props: true },
  { path: "/outdated", name: "Outdated", component: Outdated },
  { path: "/giants", name: "Giants", component: Giants },
  { path: "/rookies", name: "Rookies", component: Rookies },
  { path: "/oldGuys", name: "OldGuys", component: OldGuys },
  { path: "/wise", name: "Wise", component: Wise },
  { path: "/articles", name: "Articles", component: Articles },
  { path: "/complex", name: "Complex", component: Complex },
  { path: "/immersion", name: "Immersion", component: Immersion }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to,from, savedPosition){
    // console.log({savedPosition, to, from})
    if(savedPosition){
      return savedPosition
    } else{
      const position: any = {};
      if(to.hash) {
        position.selector = to.hash
        return false;
      }
    }
  },
});

export default router;
