import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.directive("list", {
  bind: function(el, binding) {
    if (binding.value === "wide") {
      console.log(binding.value);
      el.style.maxWidth = "1200px";
      el.style.color = "red";
    }
    if (binding.value === "narrow") {
      console.log(binding.value);
      el.style.maxWidth = "600px";
    }
    if (binding.arg === "cyan") {
      el.style.backgroundColor = "cyan";
    }
    if (binding.arg === "orange") {
      el.style.backgroundColor = "orange";
    }
  }
});

Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  }
});

Vue.directive("format", {
  bind: function(el) {
    el.style.color = "blue";
    el.style.fontSize = "20px";
  }
});

Vue.filter("makeUpperCase", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter("contentSnippet", function(value) {
  return value.slice(0, 70) + "...";
});

export const EventBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount("#app");
