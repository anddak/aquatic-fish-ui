import React from 'react';
import {  Drawer, Row, Col } from "antd";
import './FishDetailsDrawer.css';
import { connect } from "react-redux";
import { changeDrawerVisibility } from "../../src/js/redux/actions/index";
import {fishImages} from '../js/utils/image-mapper';


function FishDetailsDrawer ({visible, changeDrawerVisibility, fishName}) {

    return (
      <Drawer
        width={640}
        title={fishName}
        placement="right"
        closable={false}
        onClose={changeDrawerVisibility}
        visible={visible}
      >
          <Row type="flex">
              <Col span={12}>
              </Col>
              <Col span={12}>
                  <img src={fishImages[fishName]} alt={fishName} height="256" width="256"/>
              </Col>
          </Row>
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


