import { defineStore } from 'pinia'
import { store } from '/@/store';

const tokenKey = 'backend-token'

interface UserInfo {
    id: number
    name: string
}

interface AppState {
    token: string
    userInfo: UserInfo
}

export const useAppStore = defineStore({
    id: 'app',
    state: (): AppState => ({
        token: sessionStorage.getItem(tokenKey) ?? '',
        userInfo: {
            id: 0,
            name: ''
        }
    }),
    getters: {
        getToken(): string {
            return this.token
        }
    },
    actions: {
        setToken(val: string): void {
            this.token = val
            sessionStorage.setItem(tokenKey, val)
        },
        isLoggedIn(): boolean {
            return this.token != ''
        }
    },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
    return useAppStore(store);
}