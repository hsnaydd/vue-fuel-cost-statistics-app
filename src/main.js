// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    invalid: 'is-invalid',
  },
});

Vue.filter('currency', {
  read(value, unit) {
    return `${value.toFixed(2)} ${unit}`;
  },
  write(value) {
    if (!value && typeof value !== 'number') {
      return 0;
    }

    return value.toFixed(2);
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
