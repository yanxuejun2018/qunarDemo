import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "@css/reset.css";
import "@css/border.css";
import "@css/iconfont.css";
import "vant/lib/index.css";
import { Button } from "vant";
Vue.use(Button);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
