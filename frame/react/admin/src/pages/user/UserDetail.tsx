import React, {Component} from 'react';
import UserStore from "../../store/UserStore";
import {inject, observer} from "mobx-react";
import {Button, Space} from "antd";

interface IProps {
    userStore?: UserStore
}

@inject('userStore')
@observer
class UserDetail extends Component<IProps> {
    changeName = () => {
        this.props.userStore?.changeName('Lee')
    }
    delName = () => {
        this.props.userStore?.delName()
    }
    render() {
        return (
            <>
                {this.props.userStore?.username}
                <Space>
                    <Button type='primary' onClick={this.changeName}>修改姓名</Button>
                    <Button type='primary' onClick={this.delName}>删除姓名</Button>
                </Space>
            </>
        );
    }
}

export default UserDetail;
