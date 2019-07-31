import React from 'react';
import {  Drawer, Row, Divider } from "antd";
import './FishDetailsDrawer.css';
import { connect } from "react-redux";
import { changeDrawerVisibility } from "../../js/redux/actions/index";
import {DrawerSectionSpecification} from "./drawer-section/DrawerSectionSpecification";


function FishDetailsDrawer ({visible, changeDrawerVisibility, fishName}) {

    return (
      <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={changeDrawerVisibility}
        visible={visible}
      >
          <Row type="flex">
              <p className="drawer-title">{fishName}</p>
          </Row>
          <DrawerSectionSpecification fishName={fishName}/>
          <Divider />
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


