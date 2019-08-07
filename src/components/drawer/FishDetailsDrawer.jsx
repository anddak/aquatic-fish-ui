import React from 'react';
import {  Drawer, Row, Divider } from "antd";
import './FishDetailsDrawer.css';
import { connect } from "react-redux";
import { Typography } from 'antd';
import { changeDrawerVisibility } from "../../js/redux/actions/index";
import {DrawerSectionClassification} from "./drawer-section/DrawerSectionClassification";
import {DrawerSectionDescription} from "./drawer-section/DrawerSectionDescription";
import DrawerSelectionHabitat from "./drawer-section/DrawerSelectionHabitat";

const { Text } = Typography;


function FishDetailsDrawer ({visible, changeDrawerVisibility, selectedFish}) {

    console.log(selectedFish);
    return (
      <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={changeDrawerVisibility}
        visible={visible}
      >
          <Row type="flex">
              <p className="drawer-title">{selectedFish.fish}</p>
          </Row>
          <Row>
              <Text type="secondary">{selectedFish.family}</Text>
          </Row>
          <Divider />
          <DrawerSectionClassification selectedFish={selectedFish}/>
          <Divider />
          <DrawerSectionDescription description={selectedFish.description}/>
          <Divider />
          <DrawerSelectionHabitat fishName={selectedFish.fish} origin={selectedFish.origin} />
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


