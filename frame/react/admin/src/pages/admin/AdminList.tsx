import React, {Component} from 'react';
import {Button, Form, Input, Modal, Space, Table} from "antd";
import {getUserList} from '../../api/api'
import DeleteUser from "./deleteUser";
import AddAdmin from "./AddAdmin";
import EditAdmin from "./EditAdmin";

export interface IAdmin {
    age: number,
    name: string,
    mail: string,
    id: number
}

interface IState {
    adminList: IAdmin[]
    loading: boolean
    addVisible: boolean
    editVisible: boolean
    user?: IAdmin
}

class AdminList extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            loading: true,
            addVisible: false,
            editVisible: false,
            adminList: []
        }
    }
    getUserList = () => {
        getUserList().then(res => {
            const {data:{data: adminlist}} = res
            this.setState({
                adminList: adminlist,
                loading: false
            })
        })
    }

    deleteAdmin = (id:number) => {
       const list= this.state.adminList.filter(item => item.id != id)
        this.setState({
            adminList: list
        })
    }

    editAdmin = (admin?: IAdmin) => {
        this.setState({
            editVisible: true,
            user: admin
        })
    }
    showAddAdminModal = () => {
        this.setState({
            addVisible: true
        })
    }
    hideAddAdminModal = (refresh?: Boolean) => {
        if(refresh){
            // this.getUserList()
            console.log('添加成功')
        }
        this.setState({
            addVisible: false
        })
    }

    hideEditAdminModal = (refresh?: boolean) => {
        if(refresh){
            // this.getUserList()
            console.log('编辑成功')
        }
        this.setState({
            editVisible: false
        })
    }

    componentDidMount() {
        this.getUserList()
    }
    render() {
        return (
            <>
                <AddAdmin
                    addVisible={this.state.addVisible}
                    addCallback={this.hideAddAdminModal}
                />
                <EditAdmin
                    admin={this.state.user}
                    editVisible={this.state.editVisible}
                    editCallback={this.hideEditAdminModal}
                />
                <Button
                    type='primary'
                    onClick={this.showAddAdminModal}
                >添加人员</Button>
                <Table
                    loading={this.state.loading}
                    dataSource={this.state.adminList}
                    pagination={{position: ['bottomRight']}}
                    rowKey={record => record.id}
                >
                    <Table.Column
                        title={'ID'}
                        dataIndex={'id'}/>
                    <Table.Column
                        title={'姓名'}
                        dataIndex={'name'}/>
                    <Table.Column
                        title={'邮箱'}
                        dataIndex={'email'}/>
                    <Table.Column
                        title={'地址'}
                        dataIndex={'address'}/>
                    <Table.Column
                        title={'操作'}
                        render={(admin: IAdmin) => (
                            <Space>
                                <Button type='primary' onClick={() => {
                                    this.editAdmin(admin);
                                }}>编辑</Button>
                                <DeleteUser id={admin.id} deleteAdmin={this.deleteAdmin}/>
                            </Space>
                        )}
                    />
                </Table>
            </>
        );
    }
}

export default AdminList;