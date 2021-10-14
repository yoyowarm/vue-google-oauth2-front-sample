import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import GAuth from 'vue-google-oauth2'
//import GAuth from './plugins/gAuth'
import installElement from './plugins/element/installElement.js'

Vue.config.productionTip = false
Vue.use(installElement)

Vue.use(GAuth, {
  clientId: '1037580685964-e0qsgtka2ab1m7legk4eoqp638c7dveq.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false
})

new Vue({
  render: h => h(App),
}).$mount('#app')
