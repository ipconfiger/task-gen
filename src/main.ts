import { createApp } from "vue";
import "./styles.css";
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'
import App from "./App.vue";

createApp(App).use(Varlet).mount("#app");


