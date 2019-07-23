import React from 'react';
import {Input, InputNumber, Form, Button, Row, Col} from 'antd';
import './SearchForm.css';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adultSize: '',
      minTemp: '',
      maxTemp: '',
      minPh: '',
      maxPh: '',
      minWaterHardness: '',
      maxWaterHardness: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => value => {
    console.log(name, value);
    this.setState({[name]: value});
  };

  handleSearch = e => {
    console.log('test');
  };

  render() {
    const {handleChange} = this;
    return (
      <div>
        <Form layout="inline"
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}>
          <Row gutter={24}>
          <Form.Item label="Adult Size (cm)">
            <InputNumber
              className="adultSize"
              name="adultSize"
              defaultValue={0}
              onChange={handleChange('adultSize')}
           />
          </Form.Item>

          {/* temperature */}
          <Form.Item label="Water temperature °C">
            <InputNumber
              className="minTemp"
              name="minTemp"
              defaultValue={0}
              onChange={handleChange('minTemp')}/>
          </Form.Item>
          <Form.Item>
            <InputNumber
              className="maxTemp"
              name="maxTemp"
              defaultValue={0}
              onChange={handleChange('maxTemp')}/>
          </Form.Item>
            {/* --- end of temperature */}

            {/*-- pH -- */}
          <Form.Item label="pH Range">
            <InputNumber
              className="minPh"
              name="minPh"
              defaultValue={0}
              onChange={handleChange('minPh')}/>
          </Form.Item>
          <Form.Item>
            <InputNumber
              className="maxPh"
              name="maxPh"
              defaultValue={0}
              onChange={handleChange('maxPh')}/>
          </Form.Item>
            {/*-- end of pH -- */}

            {/*--Water Hardness -- */}
          <Form.Item label="Water Hardness">
            <InputNumber
              className="minWaterHardness"
              name="minWaterHardness"
              defaultValue={0}
              onChange={handleChange('minWaterHardness')}/>
          </Form.Item>
          <Form.Item>
            <InputNumber
              className="maxWaterHardness"
              name="maxWaterHardness"
              defaultValue={0}
              onChange={handleChange('maxWaterHardness')}/>
          </Form.Item>
            {/*-- end of water hardness -- */}
          </Row>
        </Form>

      </div>
    );
  }
}

//look for another solution for advanced search

export default SearchForm;

