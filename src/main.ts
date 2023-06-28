/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import api from './api'
import Manager from './api/Manager'

// Composables
import { VueElement, createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App);

// axios
app.provide('$http', api);
app.provide('$api', new Manager());

registerPlugins(app)

app.mount('#app')
