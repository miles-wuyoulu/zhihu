import Vue from 'vue'
import App from './App.vue'

import waterfall from 'vue-waterfall2'
Vue.use(waterfall)


import {
  Backtop,
  Button,
  Card
} from 'element-ui';


Vue.use(Button)
Vue.use(Backtop)
Vue.use(Card)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
