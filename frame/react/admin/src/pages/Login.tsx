import React, {Component, createRef, RefObject} from "react";
import {Button, Checkbox, Form, FormInstance, Input, message, Space} from "antd";
import '../static/css/login.css'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
class Login extends Component{

    formRef: RefObject<FormInstance>

    constructor(props: any) {
        super(props);
        this.formRef = createRef<FormInstance>()
    }
    onFinish = (values: any) => {
        message.success('Success:');
    };
    onReset = () => {
        this.formRef.current!.resetFields();
    };

    render() {
        return (
            <div id='login'>
                <Form
                    id="login-form"
                    {...layout}
                    ref={this.formRef}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Space size={20}>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                            <Button type="primary" htmlType="submit" onClick={this.onReset}>
                                重置
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}


export default Login;