import React from 'react';
import { Form, Row, Col, Button, Icon, Input, InputNumber, Select } from 'antd';
import './AdvancedSearch.css';

const { Option } = Select;

/*
Using class component because ant-design's Form requires ref's. Functional stateless components doesn't have ref's,
only class components.
 */

/*
Class for the expandable advanced search section which includes ALL fish attribute fields except Description
 */
class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      group: '',
      temperatureRef: '',
      breeding: '',
      temperament: [],
      swimLevel: [],
      habitat: [],
      diet: [],
      fish: '',
      family: '',
      genus: '',
      species: '',
      adultSize: '',
      minTemp: '',
      maxTemp: '',
      minHardness: '',
      maxHardness: '',
      minPh: '',
      maxPh: ''

    };

    this.initialState = this.state;
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleReset = () => {
    this.props.form.resetFields();
    this.setState(this.initialState);
    this.setState({ expand: true });
  };

  handleToggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  handleFormSubmit = e => {
    // fetch an endpoint with the parameters of the state then return all values GET)
  };

  /**
   * Handlers for all the <select> tags
   * @param name string passed in based on selection name, this is because using ant-design's getFieldDecorator
   * and Select tag which is not supporting the name attribute on the tag
   * @param value is the attribute of the selected <option>
   */
  handleSelection = (name, value) => {
    this.setState({ [name]: value });
  };

  /**
   * universal handler for text <Input>
   * @param evt is dynamic to match the state key and values
   */
  handleTextChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  /**
   * universal handler for number <InputNumber>
   * @param name string passed in based on selection name, this is because using ant-design's getFieldDecorator
   * and InputNumber tag which is not supporting the name attribute on the tag
   * @param value is the attribute of the selected <option>
   */
  handleNumericChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      handleReset,
      handleToggle,
      handleSelection,
      handleTextChange,
      handleNumericChange,
      handleFormSubmit
    } = this;
    const { expand } = this.state;
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        span: 9
      },
      wrapperCol: {
        span: 15
      }
    };

    return (
      <div className="advanced-search-form">
        <Form {...formItemLayout} onSubmit={handleFormSubmit}>
          <Row gutter={48} style={{ paddingTop: 20 }}>
            <Col offset={1} span={5} style={{ display: 'block' }}>
              <Form.Item label="Fish" colon={false}>
                {getFieldDecorator('fish')(
                  <Input
                    name="fish"
                    placeholder="Type name"
                    onChange={handleTextChange}
                  />
                )}
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
                <Icon type={expand ? 'up' : 'down'} />
              </a>
            </Col>
          </Row>
          {expand && (
            <div>
              <Row gutter={48}>
                <Col
                  offset={1}
                  span={5}
                  style={{ display: 'block', marginRight: 20 }}
                >
                  <Form.Item label="Family" colon={false}>
                    {getFieldDecorator('family')(
                      <Input
                        name="family"
                        placeholder="Type family"
                        onChange={handleTextChange}
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={5} style={{ display: 'block', marginRight: 20 }}>
                  <Form.Item label="Genus" colon={false}>
                    {getFieldDecorator('genus')(
                      <Input
                        name="genus"
                        placeholder="Type genus"
                        onChange={handleTextChange}
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={5} style={{ display: 'block' }}>
                  <Form.Item label="Species" colon={false}>
                    {getFieldDecorator('species')(
                      <Input
                        name="species"
                        placeholder="Type species"
                        onChange={handleTextChange}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={48}>
                <Col
                  offset={1}
                  span={5}
                  style={{ display: 'block', marginRight: 20 }}
                >
                  <Form.Item label="Group" colon={false}>
                    {getFieldDecorator('group', {
                      onChange: value => handleSelection('group', value)
                    })(
                      <Select placeholder="Select an option">
                        <Option id={1} value="marine">
                          Marine
                        </Option>
                        <Option id={2} value="freshwater">
                          Freshwater
                        </Option>
                        <Option id={3} value="pond">
                          Pond
                        </Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={5} style={{ display: 'block', marginRight: 20 }}>
                  <Form.Item label="Temperature" colon={false}>
                    {getFieldDecorator('temperatureRef', {
                      onChange: value =>
                        handleSelection('temperatureRef', value)
                    })(
                      <Select placeholder="Select an option">
                        <Option id={1} value="coldWater">
                          Cold Water
                        </Option>
                        <Option id={2} value="tropical">
                          Tropical
                        </Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={5} style={{ display: 'block' }}>
                  <Form.Item label="Breeding" colon={false}>
                    {getFieldDecorator('breeding', {
                      onChange: value => handleSelection('breeding', value)
                    })(
                      <Select placeholder="Select an option">
                        <Option id={1} value="liveBreeder">
                          Live breeder
                        </Option>
                        <Option id={2} value="eggLayer">
                          Egg layer
                        </Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={48}>
                <Col
                  offset={1}
                  span={5}
                  style={{ display: 'block', marginRight: 20 }}
                >
                  <Form.Item label="Diet" colon={false}>
                    {getFieldDecorator('diet', {
                      onChange: value => handleSelection('diet', value)
                    })(
                      <Select mode="multiple" placeholder="Select any">
                        <Option id={1} value="omnivore">
                          Omnivore
                        </Option>
                        <Option id={2} value="flakes">
                          Flakes
                        </Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={5} style={{ display: 'block', marginRight: 20 }}>
                  <Form.Item label="Temperament" colon={false}>
                    {getFieldDecorator('temperament', {
                      onChange: value => handleSelection('temperament', value)
                    })(
                      <Select mode="multiple" placeholder="Select any">
                        <Option id={1} value="friendly">
                          Friendly
                        </Option>
                        <Option id={2} value="aggressive">
                          Aggressive
                        </Option>
                        <Option id={3} value="loner">
                          Prefers alone
                        </Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={5} style={{ display: 'block', marginRight: 20 }}>
                  <Form.Item label="Swim Level" colon={false}>
                    {getFieldDecorator('swimLevel', {
                      onChange: value => handleSelection('swimLevel', value)
                    })(
                      <Select mode="multiple" placeholder="Select any">
                        <Option id={1} value="upper">
                          Upper Level
                        </Option>
                        <Option id={2} value="mid">
                          Mid-Level
                        </Option>
                        <Option id={3} value="lower">
                          Bottom
                        </Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={5} style={{ display: 'block' }}>
                  <Form.Item label="Habitat" colon={false}>
                    {getFieldDecorator('habitat', {
                      onChange: value => handleSelection('habitat', value)
                    })(
                      <Select mode="multiple" placeholder="Select any">
                        <Option id={1} value="placeholder">
                          this will be rendered with map() from DB
                        </Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={48}>
                <Col
                  offset={1}
                  span={5}
                  style={{ display: 'block', marginRight: 20 }}
                >
                  <Form.Item label="Adult Size" colon={false}>
                    {getFieldDecorator('adultSize', {
                      initialValue: 1,
                      onChange: value => handleNumericChange('adultSize', value)
                    })(
                      <InputNumber
                        min={1}
                        formatter={value => `${value} cm`}
                        parser={value => value.replace(' cm', '')}
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={5} style={{ display: 'block', marginRight: 20 }}>
                  <Form.Item label="Min/Max temp." colon={false}>
                    {getFieldDecorator('minTemp', {
                      initialValue: 20,
                      onChange: value => handleNumericChange('minTemp', value)
                    })(
                      <InputNumber
                        style={{ marginRight: 8 }}
                        min={1}
                        formatter={value => `${value} °C`}
                        parser={value => value.replace(' °C', '')}
                      />
                    )}
                    {getFieldDecorator('maxTemp', {
                      initialValue: 30,
                      onChange: value => handleNumericChange('maxTemp', value)
                    })(
                      <InputNumber
                        min={1}
                        formatter={value => `${value} °C`}
                        parser={value => value.replace(' °C', '')}
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={5} style={{ display: 'block', marginRight: 20 }}>
                  <Form.Item label="Water Hardness" colon={false}>
                    {getFieldDecorator('minHardness', {
                      initialValue: 10,
                      onChange: value =>
                        handleNumericChange('minHardness', value)
                    })(
                      <InputNumber
                        style={{ marginRight: 8 }}
                        min={1}
                        formatter={value => `${value} dH`}
                        parser={value => value.replace(' °dH', '')}
                      />
                    )}

                    {getFieldDecorator('maxHardness', {
                      initialValue: 100,
                      onChange: value =>
                        handleNumericChange('maxHardness', value)
                    })(
                      <InputNumber
                        min={1}
                        formatter={value => `${value} dH`}
                        parser={value => value.replace(' °dH', '')}
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={5} style={{ display: 'block' }}>
                  <Form.Item label="pH Levels" colon={false}>
                    {getFieldDecorator('minPh', {
                      initialValue: 1,
                      onChange: value => handleNumericChange('minPh', value)
                    })(<InputNumber style={{ marginRight: 8 }} min={1} />)}
                    {getFieldDecorator('maxPh', {
                      initialValue: 10,
                      onChange: value => handleNumericChange('maxPh', value)
                    })(<InputNumber min={1} />)}
                  </Form.Item>
                </Col>
              </Row>
            </div>
          )}
        </Form>
      </div>
    );
  }
}

export const WrappedAdvancedSearch = Form.create({ name: 'advanced_search' })(
  AdvancedSearch
);
