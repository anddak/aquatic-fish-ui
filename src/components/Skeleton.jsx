import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Text from "antd/lib/typography/Text";
import "./Skeleton.css"
import {Route, Link } from "react-router-dom";
import {FishDatabase} from "./fish-database/FishDatabase";
import {MyAquarium} from "./my-aquarium/MyAquarium";
import {Help} from "./help/Help";


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
                <Icon type="database" />
                <span>Fish Database</span>
                <Link to="/fish-database"/>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="container" />
                <span>My Aquarium</span>
                <Link to="/my-aquarium"/>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="info-circle" />
                <span>Help</span>
                <Link to="/how-to-use"/>
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
             <Route exact path="/" component={FishDatabase} />
             <Route path="/fish-database" component={FishDatabase} />
             <Route path="/my-aquarium" component={MyAquarium} />
             <Route path="/how-to-use" component={Help} />
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
