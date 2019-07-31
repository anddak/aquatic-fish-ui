import {Row} from "antd";
import React from "react";
import { Typography } from 'antd';

const { Paragraph } = Typography;

export function DrawerSectionDescription({description}) {

  return (
    <div>
      <Row type="flex">
        <p className="drawer-menu">Description</p>
        <Paragraph>{description}</Paragraph>
      </Row>
    </div>
  )
}