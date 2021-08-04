import Vue from 'vue';
import App from './App';
import VueSplide from '@splidejs/vue-splide';
import VueModalTor from "vue-modaltor/dist/vue-modaltor.common";
import "vue-modaltor/dist/vue-modaltor.css";

Vue.use(VueModalTor, {
  bgPanel: "#fff"
});
Vue.use( VueSplide );

new Vue( {
  el    : '#app',
  render: h => h( App ),
} );

