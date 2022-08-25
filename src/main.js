import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRightFromBracket,
  faGear,
  faPaperPlane,
  faPlus,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

library.add(
  faBell,
  faGear,
  faArrowRightFromBracket,
  faPaperPlane,
  faPlus,
  faRotate
);

import Master from "@/views/layout/Master.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("master-layout", Master)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
