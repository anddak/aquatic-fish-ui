import {Col, Row} from "antd";
import React from "react";
import './DrawerSection.css';
import {originMaps} from "../../../js/utils/image-mapper";


export default function DrawerSelectionOrigin({origin}) {

    return (
        <div>
            <Row type="flex">
                <Col span={12}>
                    <p className="drawer-menu">Origin</p>
                </Col>
                <Col span={12}>
                    <img src={originMaps[origin]} alt={origin} width="256"/>
                </Col>
            </Row>
        </div>
    )
}