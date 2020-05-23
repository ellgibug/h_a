import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios';

require('dotenv').config();

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvbGFyYXZlbFwvaGVscHlcL3B1YmxpY1wvYXBpXC9sb2dpbiIsImlhdCI6MTU5MDIxMzgzMiwiZXhwIjoxNTkwMjIxMDMyLCJuYmYiOjE1OTAyMTM4MzIsImp0aSI6IkJTTlFCR1lmTzhWTFI4NUUiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.UQfealihBV1ZPUuXP3D4VJd-HvxULzsXJLqG16r4lWE';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
