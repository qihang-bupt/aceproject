import React, {Component} from 'react';
import {Button, message, Popconfirm, Space} from "antd";

interface IProps {
    id: number
    deleteAdmin: (id: number) => void
}
class DeleteUser extends Component<IProps> {
    constructor(props:IProps) {
        super(props);
    }
    cancel = () => {
        message.info('取消删除')
    }
    confirm = () => {
        // deleteAdmin(this.props.id).then(reponse => {
        //     const {code, msg} = reponse.data
        //     if (code === 0) {
        //         message.success(msg)
        //         this.props.deleteAdmin(this.props.id)
        //     } else {
        //         message.error(msg)
        //     }
        // })
        this.props.deleteAdmin(this.props.id)
    }
    render() {
        return (
            <>
                <Popconfirm
                    title="是否删除?"
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="是"
                    cancelText="否"
                >
                    <Button type='primary' danger>删除</Button>
                </Popconfirm>
            </>
        );
    }
}

export default DeleteUser;