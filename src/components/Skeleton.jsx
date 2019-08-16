import React from 'react';
import MainTable from "./MainTable";
import {WrappedAdvancedSearch} from "./advanced-search/AdvancedSearch"
import { Layout, Menu, Icon } from 'antd';
import Text from "antd/lib/typography/Text";
import "./Skeleton.css"

const { Header, Sider, Content, Footer } = Layout;


class Skeleton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {

    return (
        <Layout>
          <Sider trigger={null} theme="light" position="fixed" collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 10 }}>
              <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
              />
            </Header>
            <Content
                style={{
                  margin: '24px 16px',
                  background: '#fff',
                  minHeight: "100vh",
                }}
            >
             <WrappedAdvancedSearch/>
             <MainTable/>
            </Content>
            <Footer className="footer">
              <Text>Created by Andras Dako, 2019</Text>
            </Footer>
          </Layout>
        </Layout>
    );
  }
}

export default Skeleton;
