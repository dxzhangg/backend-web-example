<template>
    <Row justify="end" class="code-row-bg">
        <Col>
        <Dropdown trigger="click">
            <a href="javascript:void(0)" class="i-layout-header-trigger i-layout-header-trigger-min">
                <Avatar shape="square" icon="ios-person" />{{ appStore.userInfo.name }}
            </a>
            <template #list>
                <DropdownMenu>
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem>豆汁儿</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem>退出</DropdownItem>
                </DropdownMenu>
            </template>
        </Dropdown>
        </Col>
    </Row>
</template>

<script lang="ts" setup>
import { useAppStore } from '/@/store/modules/app';
const appStore = useAppStore()

</script>

<style>
.i-layout-header-trigger {
    display: inline-block;
    height: 48px;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.i-layout-header-trigger:hover {
    background: #f8f8f9;
}

.i-layout-header-trigger-min {
    width: auto;
    padding: 0 12px;
}
</style>