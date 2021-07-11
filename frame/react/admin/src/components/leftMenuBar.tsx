import React, {Component} from 'react';
import {Menu} from "antd";
import {
    PieChartOutlined
} from '@ant-design/icons';

import {Link, matchPath, RouteComponentProps, withRouter} from "react-router-dom";
import {Iroute, router} from '../route/index'
const { SubMenu } = Menu;

interface IState {
    defaultOpenKeys: string[],
    defaultSelectedKeys: string[]
}

interface IProps extends RouteComponentProps{

}

class LeftMenuBar extends Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);
        this.state = {
            defaultOpenKeys: [],
            defaultSelectedKeys: []
        }
    }
    componentDidMount() {
        this.highlightMenu(router)
    }
    highlightMenu = (leftRoutes: Iroute[]) => {
        let path = this.props.location.pathname
        for (let r of leftRoutes) {
            console.log('r::::',r)
            let match = matchPath(path, {path: r.path})
            if (match) {
                console.log('match',match)
                if (match.isExact) {
                    console.log('r zzz::::',r)
                    this.setState({
                        defaultSelectedKeys: [r.path]
                    })
                    console.log('defaultSelectedKeys::',this.state.defaultSelectedKeys)
                } else {
                    this.setState({defaultOpenKeys: [r.path]})
                    console.log('defaultOpenKeys',this.state.defaultOpenKeys)

                }
            }
            if (r.children) {
                this.highlightMenu(r.children)
            }
        }
    }
    generateMenu = (routerList:Iroute[]) => {
        return (
            <>
                {
                    routerList?.map(r => {
                        if(r.children && r.children.length > 0){
                            return (
                                <SubMenu key={r.path}  title={r.title} icon={<PieChartOutlined />}>
                                    {this.generateMenu(r.children)}
                                </SubMenu>
                            )
                        }
                        return (
                            <Menu.Item key={r.path} icon={<PieChartOutlined />}>
                                <Link to={r.path}>{r.title}</Link>
                            </Menu.Item>
                        )
                    })
                }
            </>
        )
    }
    render() {
        return (
            <div>
                {
                    this.state.defaultSelectedKeys.length > 0 ?
                        <Menu
                            mode="inline"
                            theme="dark"
                            defaultOpenKeys={this.state.defaultOpenKeys}
                            defaultSelectedKeys={this.state.defaultSelectedKeys}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {this.generateMenu(router)}
                        </Menu>
                        :null
                }
            </div>
        );
    }
}

export default withRouter(LeftMenuBar);
