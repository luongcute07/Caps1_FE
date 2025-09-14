
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import layoutAdmin from '././layout/wrapper/Admin/LayoutAdmin.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("admin-layout", layoutAdmin)

app.mount("#app")
=======
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// ...existing code...
import '@fortawesome/fontawesome-free/css/all.min.css'
// ...existing code...

createApp(App).use(router).mount('#app')

