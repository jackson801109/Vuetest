// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
// vee-validate驗證元件,ValidationObserver為整體<form>驗證元件,ValidationProvider為input驗證元件
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
// 繁體中文語系
import TW from 'vee-validate/dist/locale/zh_TW.json'
// 將驗證規則化
import * as rules from 'vee-validate/dist/rules';

import VueI18n from 'vue-i18n';
import animate from 'animate.css';


import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueI18n);
Vue.use(animate);

// 將規則導出來,加入到vee-validate擴充裡
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
// 中文語系導入
localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);

axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next);
  if(to.meta.requiresAuth){
    const api = `${process.env.APIPATH}api/user/check`;
    axios.post(api).then((response) => {
    console.log(response.data);
    if (response.data.success){
      next();
    } else {
      next({
        path: '/login',
      })
    }
            });
  } else {
    next();
  }
})