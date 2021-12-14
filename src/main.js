import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 生成 app 实例
const app = createApp(App)

// 注册svg图标全局组件
import { iconsGlobalComponents } from './icons'
iconsGlobalComponents(app)
app.use(router).mount('#app')

