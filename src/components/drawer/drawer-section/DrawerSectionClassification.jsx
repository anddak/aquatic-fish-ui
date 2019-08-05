import {Col, Divider, Drawer, Row} from "antd";
import {DescriptionItem} from "../DescriptionItem";
import './DrawerSection.css';
import {fishImages} from "../../../js/utils/image-mapper";

import React from "react";


export function DrawerSectionClassification({selectedFish}) {

    return (
        <div>
            <Row type="flex" align="middle">
                <Col span={12}>
                    <p className="drawer-menu">Classification</p>
                    <DescriptionItem title="Genus" content={selectedFish.genus}/>
                    <DescriptionItem title="Species" content={selectedFish.species}/>
                    <DescriptionItem title="Main Group" content={selectedFish.mainGroup} />
                    <DescriptionItem title="Sub Group" content={selectedFish.tempReference} />
                    <DescriptionItem title="Breeding" content={selectedFish.isLiveBreeder ? "Livebearer" : "Egglayer" } />
                </Col>
                <Col span={12}>
                    <img src={fishImages[selectedFish.fish]} alt={selectedFish.fish} width="256"/>
                </Col>
            </Row>
        </div>
    )
}