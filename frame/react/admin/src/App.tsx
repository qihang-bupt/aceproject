import React, {Component} from 'react';
import View from './components/view'
import AdminStore from './store/AdminStore';
import PermissionStore from './store/PermissionStore';
import {inject, observer} from "mobx-react";
interface IProps {
    adminStore?: AdminStore
    permissionStore?: PermissionStore
}

@inject('adminStore','permissionStore')
@observer

class App extends Component<IProps, any>{
    constructor(props:IProps, context:any) {
        super(props,context);
    }
    componentDidMount() {
        this.props.adminStore?.initAdmin()
        this.props.permissionStore?.initPermission()
    }

    render() {
        return (
            <View/>
        );
    }
}

export default App;
