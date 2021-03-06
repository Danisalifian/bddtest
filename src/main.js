import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./styles/index.css";
import "./styles/custom.css";
import VueApexCharts from "vue-apexcharts";
import VCalendar from "v-calendar";

Vue.config.productionTip = false;

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

Vue.use(VCalendar);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
