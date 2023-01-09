import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

import NProgress from 'nprogress'

import { useAppStore } from '../store/modules/app';

// app router
// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
    // 创建一个 hash 历史记录。
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    // 应该添加到路由的初始路由列表。
    routes: routes,
    // 是否应该禁止尾部斜杠。默认为假
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
})

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
    router.beforeEach((to, from) => {
        NProgress.start()

        const appStore = useAppStore()

        if (to.meta.requiresAuth && !appStore.isLoggedIn()) {
            return { name: 'login' }
        }

        if (to.meta.redirectIfLoggedIn && appStore.isLoggedIn()) {
            return { name: 'home' }
        }
    })

    router.afterEach((to, from) => {
        NProgress.done()
    })

    app.use(router)
}