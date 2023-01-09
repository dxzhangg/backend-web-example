<template>
    <Card>
        <Form label-position="right" :label-width="100">
            <Row>
                <Col>
                <FormItem label="Title">
                    <Input></Input>
                </FormItem>
                </Col>
                <Col>
                <FormItem label="Title name">
                    <Input></Input>
                </FormItem>
                </Col>
                <Col>
                <FormItem label="Aligned title">
                    <Input></Input>
                </FormItem>
                </Col>
            </Row>
            <Row justify="end">
                <Col>
                <FormItem>
                    <Button type="primary">Search</Button>
                </FormItem>
                </Col>
            </Row>
        </Form>

        <div>
            <Button type="info">新增</Button>
        </div>
        <Table class="ivu-mt-16" stripe :columns="columns" :data="data"></Table>

        <div class="i-table-page ivu-mt-16">
            <Page :total="40" show-elevator show-sizer />
        </div>
    </Card>
</template>

<script lang="ts" setup>
const columns = [
    {
        title: 'Name',
        key: 'name'
    },
    {
        title: 'Age',
        key: 'age'
    },
    {
        title: 'Address',
        key: 'address'
    }
]

const data = [
    {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        date: '2016-10-03'
    },
    {
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park',
        date: '2016-10-01'
    },
    {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        date: '2016-10-02'
    },
    {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        date: '2016-10-04'
    }
]
</script>