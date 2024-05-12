import {
  createRouter as _createRouter,
  createMemoryHistory, 
  createWebHistory,
} from "vue-router";

const pages = import.meta.glob("../pages/*.vue");
const routes = Object.keys(pages).map((p) => {
  const name = p.match(/\.\.\/pages(.*)\.vue$/)![1].toLocaleLowerCase();
  console.info(name); // /about
  return {
    path: name === "/home" ? "/" : name,
    component: pages[p],
  };
});

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR?createMemoryHistory(): createWebHistory(),
    routes,
  });
}
