import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './app/router/main'

createApp(App).use(router).mount('#app')
