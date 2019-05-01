import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import store from "./store";
Vue.use(Vuex);

export default new Vuex.Store({
  store,
  mutations,
  actions
});
