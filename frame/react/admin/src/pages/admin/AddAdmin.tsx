import React, {Component, createRef, RefObject} from 'react';
import {Button, Form, FormInstance, Input, Modal} from "antd";
import {IAdmin} from "./AdminList";

interface IProps {
    addVisible: boolean
    addCallback: (refresh?: Boolean) => void
}
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
class AddAdmin extends Component<IProps>{
    formRef: RefObject<FormInstance>;
    constructor(props: IProps) {
        super(props);
        this.formRef = createRef<FormInstance>()
    }
    saveAdmin = (user: IAdmin) => {
        console.log(user)
        this.formRef.current!.resetFields();
        this.props.addCallback(true)
    }
    cancel = () => {
        this.formRef.current!.resetFields();
        this.props.addCallback()
    }
    render() {
        return (
            <>
                <Modal
                    title="信息修改"
                    visible={this.props.addVisible}
                    footer={null}
                    onCancel={this.cancel}
                >
                        <Form
                            {...layout}
                            ref={this.formRef}
                            initialValues={{}}
                            onFinish={this.saveAdmin}
                        >
                            <Form.Item
                                label="姓名"
                                name='name'
                                rules={[
                                    {
                                        type: 'string',
                                        required: true,
                                        message: '姓名不可以为空'
                                    }
                                ]}
                            >
                                <Input placeholder="姓名" />
                            </Form.Item>
                            <Form.Item
                                label="邮箱"
                                name='email'
                                rules={[
                                    {
                                        type: 'string',
                                        required: true,
                                        message: '邮箱不可以为空'
                                    }
                                ]}
                            >
                                <Input placeholder="邮箱" />
                            </Form.Item>
                            <Form.Item label="地址" name='address'>
                                <Input placeholder="地址" />
                            </Form.Item>
                            <Form.Item
                                name='password'
                                rules={[
                                    {
                                        type: 'string',
                                        validator: (rule, value) => {
                                            if (value === undefined || value === '') {
                                                return Promise.resolve()
                                            }
                                            if (value.length < 6) {
                                                return Promise.reject('密码长度不可以小于6位');
                                            }
                                            return Promise.resolve()
                                        }
                                    }
                                ]}
                                label='密码'>
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    添加管理员
                                </Button>
                                <Button type="default" htmlType="reset">
                                    重置
                                </Button>
                            </Form.Item>
                        </Form>
                </Modal>
            </>
        );
    }
}

export default AddAdmin;