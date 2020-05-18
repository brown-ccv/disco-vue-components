import Vue from 'vue';
import App from './App.vue';
import '../node_modules/@brown-ccv/disco-styles/css/disco.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
