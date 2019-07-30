import React from 'react';
import {  Drawer } from "antd";
import './FishDetailsDrawer.css';
import { connect } from "react-redux";
import { changeDrawerVisibility } from "../../src/js/redux/actions/index";


function FishDetailsDrawer ({visible, changeDrawerVisibility}) {

    return (
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={changeDrawerVisibility}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

    )
  }

const mapStateToProps = state => ({
  visible: state.drawerVisible
});

const mapDispatchToProps = dispatch => ({
    changeDrawerVisibility: () => dispatch(changeDrawerVisibility(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(FishDetailsDrawer);


