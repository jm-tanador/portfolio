import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// VUETIFY
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// MATERIAL DESIGN ICONS
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})

const app = createApp(App)
app.use(vuetify) // This attaches your icons and components
app.mount('#app')

// DELETE OR COMMENT OUT THE LINE BELOW:
// createApp(App).mount('#app') <--- THIS WAS OVERWRITING YOUR VUETIFY CONFIG