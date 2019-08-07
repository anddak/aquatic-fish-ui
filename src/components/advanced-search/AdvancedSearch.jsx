import React from 'react';
import {Form, Row, Col, Button, Icon, Input } from 'antd';
import './AdvancedSearch.css';

/*
Using class component because ant-design's Form requires ref's. Functional components doesn't have ref's,
only class components.
 */
class AdvancedSearch extends React.Component {

    state = {
        expand: false,
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

      handleToggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    };

      render() {
          const {handleReset, handleToggle} = this;
          const { expand } = this.state;
    return(
        <div>
            <Form>
                <Row gutter={16}>
                    <Col span={1} align="right">Name</Col>
                    <Col span={5}>
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={1} align="right">Family</Col>
                    <Col span={5}>
                        <Form.Item>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={1} align="right">Genus</Col>
                    <Col span={5}>
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={1} align="right">Species</Col>
                    <Col span={5}>
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={1} align="right">Main Group</Col>
                    <Col span={5}>
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={1} align="right">Temperature Reference</Col>
                    <Col span={5}>
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={1} align="right">Breeding</Col>
                    <Col span={5}>
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={1} align="right">Diet</Col>
                    <Col span={5}>
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={1} align="right">Temperament</Col>
                    <Col span={5}>
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={1} align="right">Level Preference</Col>
                    <Col span={5}>
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={1} align="right">Habitat</Col>
                    <Col span={5}>
                        <Form.Item>
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col>Adult Size</Col>
                    <Col>Min/Max Temperature</Col>
                    <Col>Water Hardness</Col>
                    <Col>pH</Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={handleReset}>
                            Clear
                        </Button>
                        <a style={{ marginLeft: 8, fontSize: 12 }} onClick={handleToggle}>
                            Collapse
                            <Icon type={expand ? 'up' : 'down'} />
                        </a>
                    </Col>
                </Row>
            </Form>
        </div>
    )};
}

//TODO: padding for columns and more space between them, position text in the middle, maybe move search up-top

export const WrappedAdvancedSearch = Form.create({ name: 'advanced_search' })(AdvancedSearch);