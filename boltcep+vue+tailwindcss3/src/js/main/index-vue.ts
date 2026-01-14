import { createApp } from "vue";
import App from "./main.vue";
import { initBolt } from "../lib/utils/bolt";
import "../index.css";

initBolt();

createApp(App).mount("#app");
