import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { auth } from './firebase'

Vue.config.productionTip = false

auth.onAuthStateChanged(user => {
    console.log(user)
    if ( user ) {
        store.dispatch('checkAuth', {
            email: user.email,
            uid: user.uid
        })
    } else {
        store.dispatch('checkAuth', null)
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
