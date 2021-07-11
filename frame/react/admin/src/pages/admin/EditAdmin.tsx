import React, {Component, createRef, RefObject} from 'react';
import {IAdmin} from "./AdminList";
import {Button, Form, FormInstance, Input, Modal} from "antd";
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 10, span: 16 },
};


interface IProps {
    admin?: IAdmin
    editVisible: boolean
    editCallback: (refresh?: boolean) => void
}


class EditAdmin extends Component<IProps> {
    formRef: RefObject<FormInstance>;
    constructor(props: any) {
        super(props);
        this.formRef = createRef<FormInstance>();
    }

    cancel = () => {
        this.props.editCallback()
    }

    saveAdmin = (a: IAdmin) => {
        // admin.roleId = 1;
        // saveAdmin(this.props.admin?.id as number, admin).then(response => {
        //     const {code, msg} = response.data
        //     if (code === 0) {
        //         message.success(msg);
        console.log('saveAdmin', a)
                this.props.editCallback(true)
        //     } else {
        //         message.error(msg)
        //     }
        // })
    }

    render() {
        // 这句话比较重要，会初始化弹窗数据为当前item
        this.formRef.current?.setFieldsValue({...this.props.admin, password:''});
        return (
            <>
                <Modal
                    title="信息修改"
                    visible={this.props.editVisible}
                    footer={null}
                    onCancel={this.cancel}

                >
                    <Form
                        {...layout}
                        ref={this.formRef}
                        initialValues={{...this.props.admin, password:''}}
                        onFinish={this.saveAdmin}
                    >
                        <Form.Item
                            name="name"
                            label="姓名"
                            shouldUpdate={(prevValues, curValues) => prevValues.a !== curValues.a}
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
                        <Form.Item name="email" label="邮箱">
                            <Input placeholder="邮箱" />
                        </Form.Item>
                        <Form.Item name="address"  label="地址">
                            <Input placeholder="地址" />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item  {...tailLayout}>
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }
}

export default EditAdmin;