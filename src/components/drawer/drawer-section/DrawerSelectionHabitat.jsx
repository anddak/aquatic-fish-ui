import {Col, Row} from "antd";
import React from "react";
import './DrawerSection.css';
import {habitatMaps} from "../../../js/utils/image-mapper";
import { Typography } from 'antd';

const { Paragraph } = Typography;

export default function DrawerSelectionHabitat({origin, fishName}) {

    return (
        <div>
            <Row type="flex">
                <Col span={12}>
                    <p className="drawer-menu">Habitat by country</p>
                    {origin.map((country) =>
                         <Paragraph>{country}</Paragraph>)
                    }
                    < br />
                </Col>
                <Col span={12}>
                    <img src={habitatMaps[fishName]} alt={fishName} width="256"/>
                </Col>
            </Row>
        </div>
    )
}