import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "@css/reset.css";
import "@css/border.css";
import "@css/iconfont.css";
import "vant/lib/index.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);
import { Icon } from 'vant';
 Vue.use(Icon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
