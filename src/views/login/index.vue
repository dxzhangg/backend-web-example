<template>
    <Row>
        <Col span="8" offset="8">
        <Title>Admin</Title>
        <Login @on-submit="handleSubmit">
            <UserName name="username" />
            <Password name="password" />
            <Captcha name="captcha" :count-down="0" @on-get-captcha="handleGetCaptcha">
                <template #text>
                    <img :src="'https://file.iviewui.com/iview-pro/' + captcha">
                </template>
            </Captcha>
            <Submit />
        </Login>
        </Col>
    </Row>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '/@/store/modules/app';
const router = useRouter()
const appStore = useAppStore()
interface loginForm {
    username: string
    password: string
    captcha: string
}
const captcha = ''
const handleSubmit = (valid: any, { username, password, captcha }: loginForm) => {
    if (valid) {
        appStore.setToken('sdfwef')
        router.replace({ name: 'home' })
    }
}

const handleGetCaptcha = function () {

}
</script>