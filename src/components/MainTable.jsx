import React from 'react';
import {
  Table,
  Input,
  Button,
  Icon,
  InputNumber,
  Col,
  Row,
  Slider
} from 'antd';
import './MainTable.css';
import { connect } from 'react-redux';
import FishDetailsDrawer from './drawer/FishDetailsDrawer';
import { changeDrawerVisibility } from '../js/redux/actions';

const fishStub = [
  {
    fish: 'Zebra Danio',
    family: 'xyz',
    genus: 'abc',
    species: 'qwe',
    origin: [ 'India', 'Pakistan', 'Nepal', 'Bhutan', 'Bangladesh' ],
    diet: 'sds',
    temperament: 'sd',
    levelPreference: 'sdd',
    adultSize: '4',
    minTemp: '2',
    maxTemp: '20',
    minPh: '4',
    maxPh: '15',
    minWaterHardness: '50',
    maxWaterHardness: '100',
    tempReference: 'sd',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    isLiveBreeder: true,
    mainGroup: 'main group'
  },
  {
    fish: 'Siamese Fighting Fish',
    family: 'xyz',
    genus: 'abc',
    species: 'qwe',
    origin: [ 'Myanmar', 'Laos', 'Thailand', 'Cambodia' ],
    diet: 'ex. carnivore',
    temperament: 'ex. friendly, territorial',
    levelPreference: 'ex. upper, mid-level, bottom',
    adultSize: '2',
    minTemp: '7',
    maxTemp: '20',
    minPh: '4',
    maxPh: '15',
    minWaterHardness: '50',
    maxWaterHardness: '100',
    tempReference: 'cold, tropical',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    isLiveBreeder: false,
    mainGroup: 'marine, fresh water, pond'
  },
  {
    fish: 'Discus',
    family: 'xyz',
    genus: 'abc',
    species: 'qwe',
    origin: [ 'Brazil', 'Peru', 'Colombia' ],
    diet: 'sds',
    temperament: 'sd',
    levelPreference: 'sdd',
    adultSize: '2',
    minTemp: '9',
    maxTemp: '20',
    minPh: '4',
    maxPh: '15',
    minWaterHardness: '50',
    maxWaterHardness: '100',
    tempReference: 'sd',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    isLiveBreeder: true,
    mainGroup: 'main group'
  }
];

class MainTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    searchText: '',
    adultSizeLo: 1,
    adultSizeHi: 100,
    minTempLo: 1,
    minTempHi: 35,
    maxTempLo: 1,
    maxTempHi: 35,
    minPhLo: 1,
    minPhHi: 10,
    maxPhLo: 1,
    maxPhHi: 10,
    minWaterHardnessLo: 1,
    minWaterHardnessHi: 500,
    maxWaterHardnessLo: 1,
    maxWaterHardnessHi: 500,
    selectedFish: ''
  };

  getColumnFilterProps = dataIndex => ({
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm }) => (
        <div style={ { padding: 8 } }>
            <Row
          type="flex"
          gutter={ 10 }
          style={ { marginBottom: 8, alignItems: 'center' } }
        >
                <Col>Range:</Col>
                <Col>
                    <InputNumber
              value={ this.state[ `${ dataIndex }Lo` ] }
              onChange={ e => {
                this.setState({ [ `${ dataIndex }Lo` ]: e });
                setSelectedKeys(
                  fishStub.filter(d => e <= d[ dataIndex ]).map(d => d.fish)
                );
              } }
            />
                </Col>
                <Col>
                    <InputNumber
              value={ this.state[ `${ dataIndex }Hi` ] }
              onChange={ e => {
                this.setState({ [ `${ dataIndex }Hi` ]: e });
                setSelectedKeys(
                  fishStub.filter(d => d[ dataIndex ] <= e).map(d => d.fish)
                );
              } }
            />
                </Col>
            </Row>
            <Row>
                <Slider
            range value={ [ this.state[ `${ dataIndex }Lo` ], this.state[ `${ dataIndex }Hi` ] ] }
            onChange={ e =>
              this.setState({
                [ `${ dataIndex }Lo` ]: e[ 0 ],
                [ `${ dataIndex }Hi` ]: e[ 1 ]
              })
            }
          />
            </Row>
            <Row>
                <Button
            type="primary"
            block
            size="small"
            onClick={ () => {
              this.handleFilter(selectedKeys, confirm);
              setSelectedKeys(
                fishStub
                  .filter(
                    d =>
                      this.state[ `${ dataIndex }Lo` ] <= d[ dataIndex ] &&
                      d[ dataIndex ] <= this.state[ `${ dataIndex }Hi` ]
                  )
                  .map(d => d.fish)
              );
            } }
          >
            Confirm
                </Button>
            </Row>
        </div>
    ),
    filterIcon: filtered => (
        <Icon
        type="sliders"
        style={ { color: filtered ? '#1890ff' : undefined } }
      />
    ),
    onFilter: (value, record) =>
      this.state[ `${ dataIndex }Lo` ] <= record[ dataIndex ] &&
      record[ dataIndex ] <= this.state[ `${ dataIndex }Hi` ]
  });

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
        <div style={ { padding: 8 } }>
            <Input
          ref={ node => {
            this.searchInput = node;
          } }
          placeholder={ `Search ${ dataIndex }` }
          value={ selectedKeys[ 0 ] }
          onChange={ e =>
            setSelectedKeys(e.target.value ? [ e.target.value ] : [])
          }
          onPressEnter={ () => this.handleSearch(selectedKeys, confirm) }
          style={ { width: 188, marginBottom: 8, display: 'block' } }
        />
            <Button
          type="primary"
          onClick={ () => this.handleSearch(selectedKeys, confirm) }
          icon="search"
          size="small"
          style={ { width: 90, marginRight: 8 } }
        >
          Search
            </Button>
            <Button
          onClick={ () => this.handleReset(clearFilters) }
          size="small"
          style={ { width: 90 } }
        >
          Reset
            </Button>
        </div>
    ),
    filterIcon: filtered => (
        <Icon type="search" style={ { color: filtered ? '#1890ff' : undefined } } />
    ),
    onFilter: (value, record) =>
      record[ dataIndex ]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase())
  });

  handleFilter = (selectedKeys, confirm) => {
    confirm();
  };

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[ 0 ] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  handleClick(fish) {
    this.props.changeDrawerVisibility();
    const selectedFish = fishStub.find(x => x.fish === fish);
    this.setState({ selectedFish: selectedFish });
  }

  render() {
    const columns = [
      {
        title: 'Fish',
        dataIndex: 'fish',
        key: 'fish',
        ...this.getColumnSearchProps('fish'),
        sorter: (a, b) => a.fish.localeCompare(b.fish),
        render: text => <a onClick={ () => this.handleClick(text) }>{text}</a>
      },
      {
        title: 'Family',
        dataIndex: 'family',
        key: 'family',
        ...this.getColumnSearchProps('family'),
        sorter: (a, b) => a.family.localeCompare(b.family)
      },
      {
        title: 'Diet',
        dataIndex: 'diet',
        key: 'diet',
        ...this.getColumnSearchProps('diet'),
        sorter: (a, b) => a.diet.localeCompare(b.diet)
      },
      {
        title: 'Temperament',
        dataIndex: 'temperament',
        key: 'temperament',
        ...this.getColumnSearchProps('temperament'),
        sorter: (a, b) => a.temperament.localeCompare(b.temperament)
      },
      {
        title: 'Level Preference',
        dataIndex: 'levelPreference',
        key: 'levelPreference',
        ...this.getColumnSearchProps('levelPreference'),
        sorter: (a, b) => a.levelPreference.localeCompare(b.levelPreference)
      },
      {
        title: 'Adult Size (cm)',
        dataIndex: 'adultSize',
        key: 'adultSize',
        sorter: (a, b) => a.adultSize.localeCompare(b.adultSize),
        ...this.getColumnFilterProps('adultSize')
      },
      {
        title: 'Min °C',
        dataIndex: 'minTemp',
        key: 'minTemp',
        sorter: (a, b) => a.minTemp - b.minTemp,
        ...this.getColumnFilterProps('minTemp')
      },
      {
        title: 'Max °C',
        dataIndex: 'maxTemp',
        key: 'maxTemp',
        sorter: (a, b) => a.maxTemp - b.maxTemp,
        ...this.getColumnFilterProps('maxTemp')
      },
      {
        title: 'Min pH',
        dataIndex: 'minPh',
        key: 'minPh',
        sorter: (a, b) => a.minPh - b.minPh,
        ...this.getColumnFilterProps('minPh')
      },
      {
        title: 'Max pH',
        dataIndex: 'maxPh',
        key: 'maxPh',
        sorter: (a, b) => a.maxPh - b.maxPh,
        ...this.getColumnFilterProps('maxPh')
      },
      {
        title: 'Min Water Hardness',
        dataIndex: 'minWaterHardness',
        key: 'minWaterHardness',
        sorter: (a, b) => a.minWaterHardness - b.minWaterHardness,
        ...this.getColumnFilterProps('minWaterHardness')
      },
      {
        title: 'Max Water Hardness',
        dataIndex: 'maxWaterHardness',
        key: 'maxWaterHardness',
        sorter: (a, b) => a.maxWaterHardness - b.maxWaterHardness,
        ...this.getColumnFilterProps('maxWaterHardness')
      }
    ];
    return (
        <div>
            <Table columns={ columns } dataSource={ fishStub } />
            <FishDetailsDrawer selectedFish={ this.state.selectedFish } />
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeDrawerVisibility: () => dispatch(changeDrawerVisibility(true))
});

export default connect(
  null,
  mapDispatchToProps
)(MainTable);
