import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

var app = new Vue({
  el: '#app',
  render: h => h(App)
})
