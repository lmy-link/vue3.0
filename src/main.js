import { createApp } from 'vue'
import App from './App.vue'

// 生成 app 实例
const app = createApp(App)

// 注册svg图标全局组件
import { iconsGlobalComponents } from '@/icons'
iconsGlobalComponents(app)

createApp(App).mount('#app')
