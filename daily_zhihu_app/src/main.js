import Vue from 'vue'
import App from './App.vue'


import { Row, Col,Carousel,CarouselItem} from "element-ui"
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
