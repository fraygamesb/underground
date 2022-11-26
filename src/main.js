import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: '737727923477-f96nfi92pb988f43o3to1r6vduiqpcuu.apps.googleusercontent.com'
})

app.mount('#app')


