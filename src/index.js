import Vue from 'vue';
import App from './App.vue';
import router from './Routing/routing.js';


new Vue({
  render: createElement => createElement(App),
  el: '#app',
  router
});
