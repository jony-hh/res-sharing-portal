import { createApp } from 'vue'
import App from '@/App.vue'

// 导入全局的样式
import '@/styles/index.scss'

// TODO 不封装axios,直接使用
// import axios from 'axios'

// 引入路由
import router from '@/router'

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
app.use(router)
app.use(vuetify)
app.mount('#app')
