import Vue from "vue";
import Vuesax from "vuesax";
import VueRouter from "vue-router";

import App from "./App.vue";
import FormPreview from "./components/FormPreview.vue";
import FormBuilder from "./components/FormBuilder.vue";
import store from "./store";

import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/preview",
      component: FormPreview
    },
    {
      path: "/",
      component: FormBuilder
    }
  ]
});

Vue.use(VueRouter);
Vue.use(Vuesax);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
