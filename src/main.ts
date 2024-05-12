import "./style.css";
import App from "./App.vue";
import { createSSRApp } from "vue";
//import { createApp } from 'vue'
import { createRouter } from "./router/route";

//createApp(App).use(createRouter()).mount('#app')
export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
