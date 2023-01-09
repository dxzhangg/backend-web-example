<template>
    <Sider :style="{ position: 'fixed', height: '100vh', left: 0, overflow: 'auto' }">
        <TheSide></TheSide>
    </Sider>
    <Layout :style="{ marginLeft: '200px' }">
        <Header :style="{ background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)' }">
            <TheHeader></TheHeader>
        </Header>
        <Content :style="{ padding: '16px' }">
            <RouterView></RouterView>
        </Content>
    </Layout>
</template>

<script lang="ts" setup>
import TheSide from '/@/layouts/default/TheSide.vue'
import TheHeader from '/@/layouts/default/TheHeader.vue'

const isCollapsed = false

</script>

<style>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.dev-run-preview .dev-run-preview-edit {
    display: none
}
</style>