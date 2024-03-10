import { createApp } from 'vue'
import App from '@/App.vue'

// 导入全局的样式
import '@/styles/index.scss'

// 引入路由
import router from '@/router'

// 引入pinia
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPersist)

app.use(router)
app.use(vuetify)
app.use(pinia)
app.mount('#app')
