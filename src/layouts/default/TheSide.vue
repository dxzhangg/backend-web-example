<template>
    <Menu theme="dark" active-name="user.index" :open-names="['1']" width="auto" accordion>
        <MenuItem name="home" :to="{ name: 'home' }">
        <Icon type="ios-paper" />首页
        </MenuItem>
        <Submenu name="1">
            <template #title>
                <Icon type="ios-settings-outline" />
                系统管理
            </template>
            <MenuItem name="user.index" :to="{ name: 'user.index' }">用户管理</MenuItem>
            <MenuItem name="menu.index" :to="{ name: 'menu.index' }">菜单管理</MenuItem>
            <MenuItem name="role.index" :to="{ name: 'role.index' }">角色管理</MenuItem>
            <MenuItem name="operation_log.index" :to="{ name: 'operation_log.index' }">操作日志</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template #title>
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu>
</template>