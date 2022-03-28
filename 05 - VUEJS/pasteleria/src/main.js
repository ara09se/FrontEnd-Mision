import { createApp } from 'vue'

import { configureDependencies } from './config/dependencyInjector'
import { router } from './app/routes/index'
import App from './app/App.vue'

const app = createApp(App)
app.use(router).mount('#app')

configureDependencies(app)