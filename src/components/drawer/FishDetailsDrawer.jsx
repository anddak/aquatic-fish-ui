import React from 'react';
import {  Drawer, Row, Divider } from "antd";
import './FishDetailsDrawer.css';
import { connect } from "react-redux";
import { changeDrawerVisibility } from "../../js/redux/actions/index";
import {DrawerSectionSpecification} from "./drawer-section/DrawerSectionSpecification";
import {DrawerSectionDescription} from "./drawer-section/DrawerSectionDescription";


function FishDetailsDrawer ({visible, changeDrawerVisibility, fishName}) {

  //TODO: fetch here, then pass down the required details to the corresponding drawer sections
  const stubDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

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
          <DrawerSectionDescription description={stubDescription}/>
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


