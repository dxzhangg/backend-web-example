import { createApp } from 'vue'
import '/@/style.css'
import '/@/style.less'
import ViewUIPlus from 'view-ui-plus'
import 'nprogress/nprogress.css'
import App from '/@/App.vue'

import { setupStore } from '/@/store'

import { setupRouter } from '/@/router'

async function bootstrap() {
    const app = createApp(App)
    setupStore(app)
    setupRouter(app)
    app.use(ViewUIPlus)
    app.mount('#app')
}

bootstrap()