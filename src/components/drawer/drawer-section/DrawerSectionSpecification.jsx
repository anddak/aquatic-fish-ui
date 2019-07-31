import {Col, Divider, Drawer, Row} from "antd";
import {DescriptionItem} from "../DescriptionItem";
import './DrawerSectionSpecification.css';
import {fishImages} from "../../../js/utils/image-mapper";

import React from "react";


export function DrawerSectionSpecification({fishName}) {

    return (
        <div>
            <Row type="flex" align="middle">
                <Col span={12}>
                    <p className="drawer-menu">Classification</p>
                    <DescriptionItem title="Genus" content={"Fetch genus"}/>
                    <DescriptionItem title="Species" content={"Fetch species"}/>
                </Col>
                <Col span={12}>
                    <img src={fishImages[fishName]} alt={fishName} width="256"/>
                </Col>
            </Row>
        </div>
    )
}