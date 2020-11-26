import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Auth0Plugin } from './auth'

const domain = process.env.VUE_APP_AUTH0_DOMAIN_APIKEY
const clientId = process.env.VUE_APP_AUTH0_CLIENT_APIKEY
Vue.use(router);

Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
        router.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
        )
    }
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
