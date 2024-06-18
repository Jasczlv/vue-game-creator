import { createApp } from "vue";

import App from "./App.vue";

// routes
import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(fas, far, fab);

// routes
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: AppHome }],
});

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
