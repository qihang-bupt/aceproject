import React, {Component} from 'react';
import LeftMenuBar from "./leftMenuBar";
import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Sider } = Layout;

class AppLayout extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <LeftMenuBar/>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                {this.props.children}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default AppLayout;