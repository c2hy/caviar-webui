import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VConsole from 'vconsole'
new VConsole()

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
