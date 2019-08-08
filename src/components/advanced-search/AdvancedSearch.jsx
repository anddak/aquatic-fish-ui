import React from 'react';
import {Form, Row, Col, Button, Icon, Input, InputNumber, Select } from 'antd';
import './AdvancedSearch.css';

const {Option} = Select;


/*
Using class component because ant-design's Form requires ref's. Functional stateless components doesn't have ref's,
only class components.
 */

/*
Class for the expandable advanced search section which includes ALL fish attribute fields except Description
 */
class AdvancedSearch extends React.Component {

    constructor () {
        super();
        this.state = {
            expand: false,
            group: ""
        };
        this.handleFormChange = this.handleFormChange.bind(this);
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

      handleToggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    };

    handleFormChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

      render() {
          const {handleReset, handleToggle, handleFormChange} = this;
          const { expand } = this.state;
          const { getFieldDecorator } = this.props.form;

          const formItemLayout = {
              labelCol: {
                  span: 9,
              },
              wrapperCol: {
                  span: 15,
              }
          };

    return(
        <div className="advanced-search-form">
            <Form {...formItemLayout}>
                <Row gutter={48} style={{paddingTop: 20}}>
                    <Col offset={1} span={5} style={{display: "block"}}>
                        <Form.Item label="Name" colon={false}>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col offset={18}>
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={handleReset}>
                            Clear
                        </Button>
                        <a style={{ marginLeft: 8, fontSize: 12 }} onClick={handleToggle}>
                            Collapse
                            <Icon type={expand ? 'down' : 'up'} />
                        </a>
                    </Col>
                </Row>
                {expand && <div>
                <Row gutter={48}>
                    <Col offset={1} span={5} style={{display: "block", marginRight: 20}}>
                        <Form.Item label="Family" colon={false}>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={5} style={{display: "block", marginRight: 20}}>
                        <Form.Item label="Genus" colon={false}>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={5} style={{display: "block"}}>
                        <Form.Item label="Species" colon={false}>
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={48}>
                    <Col offset={1} span={5} style={{display: "block", marginRight: 20}}>
                        <Form.Item label="Group" colon={false}>

                            {getFieldDecorator('group')(
                                <Select
                                    name="group"
                                    placeholder="Select a option"
                                    onChange={handleFormChange}
                                >
                                    <Option value="marine">Marine</Option>
                                    <Option value="freshwater">Freshwater</Option>
                                    <Option value="pond">Pond</Option>
                                </Select>,
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={5} style={{display: "block", marginRight: 20}}>
                        <Form.Item label="Temperature" colon={false}>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={5} style={{display: "block"}}>
                        <Form.Item label="Breeding" colon={false}>
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={48}>
                        <Col offset={1} span={5} style={{display: "block", marginRight: 20}}>
                            <Form.Item label="Diet" colon={false}>
                                <Input/>
                            </Form.Item>
                        </Col>
                    <Col span={5} style={{display: "block", marginRight: 20}}>
                        <Form.Item label="Temperament" colon={false}>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={5} style={{display: "block", marginRight: 20}}>
                        <Form.Item label="Swim Level" colon={false}>
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={5} style={{display: "block"}}>
                        <Form.Item label="Habitat" colon={false}>
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={48}>
                    <Col offset={1} span={5} style={{display: "block", marginRight: 20}}>
                        <Form.Item label="Adult Size" colon={false}>
                            <InputNumber/>
                        </Form.Item>
                    </Col>
                    <Col span={5} style={{display: "block", marginRight: 20}}>
                        <Form.Item label="Temperature" colon={false}>
                            <InputNumber style={{marginRight:8}}/>
                            <InputNumber/>
                        </Form.Item>
                    </Col>
                    <Col span={5} style={{display: "block", marginRight: 20}}>
                        <Form.Item label="Water Hardness" colon={false}>
                            <InputNumber style={{marginRight:8}}/>
                            <InputNumber/>
                        </Form.Item>
                    </Col>
                    <Col span={5} style={{display: "block"}}>
                        <Form.Item label="pH Levels" colon={false}>
                            <InputNumber style={{marginRight:8}}/>
                            <InputNumber/>
                        </Form.Item>
                    </Col>
                </Row>
                </div> }
            </Form>
        </div>
    )};
}

//TODO: setup form capture, customise fields current setup is wrong because select doesn't work like input

export const WrappedAdvancedSearch = Form.create({ name: 'advanced_search' })(AdvancedSearch);