import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initSuperflow } from '@usesuperflow/client'

const app = createApp(App)

initSuperflow('jweIj5yb3k6WElsyHyp3', {
    projectId: '7562859393923502'
});

app.use(router)

app.mount('#app')
