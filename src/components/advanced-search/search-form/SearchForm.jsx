import React from 'react';
import {Input, InputNumber, Form, Button} from 'antd';

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
        <Form onSubmit={this.handleSearch}>
          <Form.Item label="adultSize">
            <Input
              className="adultSize"
              name="adultSize"
              defaultValue={0}
              onChange={handleChange}
           />
          </Form.Item>
          <Form.Item label="minTemp">
            <Input
              className="minTemp"
              name="minTemp"
              defaultValue={0}
              onChange={handleChange}/>
          </Form.Item>
          <Form.Item label="maxTemp">
            <Input
              className="maxTemp"
              name="maxTemp"
              defaultValue={0}
              onChange={handleChange}/>
          </Form.Item>
          <Form.Item label="minPh">
            <Input
              className="minPh"
              name="minPh"
              defaultValue={0}
              onChange={handleChange}/>
          </Form.Item>
          <Form.Item label="maxPh">
            <Input
              className="maxPh"
              name="maxPh"
              defaultValue={0}
              onChange={handleChange}/>
          </Form.Item>
          <Form.Item label="minWaterHardness">
            <Input
              className="minWaterHardness"
              name="minWaterHardness"
              defaultValue={0}
              onChange={handleChange}/>
          </Form.Item>
          <Form.Item label="maxWaterHardness">
            <Input
              className="maxWaterHardness"
              name="maxWaterHardness"
              defaultValue={0}
              onChange={handleChange}/>
          </Form.Item>
          <Form.Item label="testing">
            <InputNumber
              className="testing"
              defaultValue={0}
              onChange={handleChange('testing')}
              />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form>

      </div>
    );
  }
}

//TODO: solution working, look at "testing" input and convert the rest as that

export default SearchForm;

