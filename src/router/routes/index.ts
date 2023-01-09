const requiresAuth = true
const redirectIfLoggedIn = true

// 根路由
export const RootRoute = {
    path: '/',
    name: 'root',
    redirect: 'Home',
    meta: {
        title: 'Root',
    },
    component: () => import('/@/layouts/default/index.vue'),
    children: [
        {
            path: 'home',
            name: 'home',
            component: () => import('/@/views/home/index.vue'),
            meta: {
                title: 'Home',
                requiresAuth
            }
        },
        {
            path: 'menu',
            name: 'menu.index',
            component: () => import('/@/views/menu/index.vue'),
            meta: {
                title: 'Menu',
                requiresAuth
            }
        },
        {
            path: 'operation-log',
            name: 'operation_log.index',
            component: () => import('/@/views/operation_log/index.vue'),
            meta: {
                title: 'Operation Log',
                requiresAuth
            }
        },
        {
            path: 'role',
            name: 'role.index',
            component: () => import('/@/views/role/index.vue'),
            meta: {
                title: 'Role',
                requiresAuth
            }
        },
        {
            path: 'user',
            name: 'user.index',
            component: () => import('/@/views/user/index.vue'),
            meta: {
                title: 'User',
                requiresAuth
            }
        }
    ]
};

export const LoginRoute = {
    path: '/login',
    name: 'login',
    component: () => import('/@/views/login/index.vue'),
    meta: {
        title: 'Login',
        redirectIfLoggedIn
    },
}

// Basic routing without permission
// 未经许可的基本路由
export const routes = [
    LoginRoute,
    RootRoute,
];