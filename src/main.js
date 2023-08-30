import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initSuperflow } from '@usesuperflow/client'

const app = createApp(App)

initSuperflow('uZR4tlbOAi76wbVbMCzH', {
    projectId: '5314643110631054'
});

app.use(router)

app.mount('#app')
