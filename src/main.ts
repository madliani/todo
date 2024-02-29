import App from '@/App.vue'
import '@/assets/main.css'
import router from '@/router/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

const app = createApp(App)
const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives
})

app.use(pinia)
app.use(router)
app.use(vuetify)

pinia.use(piniaPluginPersistedstate)

app.mount('#app')
