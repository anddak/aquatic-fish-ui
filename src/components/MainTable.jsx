import React from 'react';
import {PageHeader, Table, Input, Button, Icon} from "antd";
import './MainTable.css';

const fishStub = [
  {
    fish: "Zebra Danio",
    family: "xyz",
    genus: "abc",
    species: "qwe",
    origin: "scdsd",
    diet: "sds",
    temperament: "sd",
    levelPreference: "sdd",
    adultSize: "2",
    minTemp: "1",
    maxTemp: "20",
    minPh: "4",
    maxPh: "15",
    minWaterHardness: "50",
    maxWaterHardness: "100",
    tempReference: "sd",
  },
  {
    fish: "Siamese Fighting Fish",
    family: "xyz",
    genus: "abc",
    species: "qwe",
    origin: "scdsd",
    diet: "sds",
    temperament: "sd",
    levelPreference: "sdd",
    adultSize: "2",
    minTemp: "1",
    maxTemp: "20",
    minPh: "4",
    maxPh: "15",
    minWaterHardness: "50",
    maxWaterHardness: "100",
    tempReference: "sd",
  },
  {
    fish: "Platty",
    family: "xyz",
    genus: "abc",
    species: "qwe",
    origin: "scdsd",
    diet: "sds",
    temperament: "sd",
    levelPreference: "sdd",
    adultSize: "2",
    minTemp: "1",
    maxTemp: "20",
    minPh: "4",
    maxPh: "15",
    minWaterHardness: "50",
    maxWaterHardness: "100",
    tempReference: "sd",
  },
];


class MainTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
      <div style={{padding: 8}}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{width: 188, marginBottom: 8, display: 'block'}}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{width: 90, marginRight: 8}}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{color: filtered ? '#1890ff' : undefined}}/>
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({searchText: selectedKeys[0]});
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({searchText: ''});
  };


  render() {

    const transactionColumns = [
      {
        title: 'Fish',
        dataIndex: 'fish',
        key: 'fish',
        ...this.getColumnSearchProps('fish'),
        sorter: (a, b) => a.fish.localeCompare(b.fish),
      },
      {
        title: 'Family',
        dataIndex: 'family',
        key: 'family',
        ...this.getColumnSearchProps('family'),
        sorter: (a, b) => a.family.localeCompare(b.family),
      },
      {
        title: 'Diet',
        dataIndex: 'diet',
        key: 'diet',
        ...this.getColumnSearchProps('diet'),
        sorter: (a, b) => a.diet.localeCompare(b.diet),
      },
      {
        title: 'Temperament',
        dataIndex: 'temperament',
        key: 'temperament',
        ...this.getColumnSearchProps('temperament'),
        sorter: (a, b) => a.temperament.localeCompare(b.temperament),
      },
      {
        title: 'Level Preference',
        dataIndex: 'levelPreference',
        key: 'levelPreference',
        ...this.getColumnSearchProps('levelPreference'),
        sorter: (a, b) => a.levelPreference.localeCompare(b.levelPreference),
      },
      {
        title: 'Adult Size (cm)',
        dataIndex: 'adultSize',
        key: 'adultSize',
        sorter: (a, b) => a.adultSize.localeCompare(b.adultSize),
      },
      {
        title: 'Min °C',
        dataIndex: 'minTemp',
        key: 'minTemp',
        sorter: (a, b) => a.minTemp - b.minTemp,
      },
      {
        title: 'Max °C',
        dataIndex: 'maxTemp',
        key: 'maxTemp',
        sorter: (a, b) => a.maxTemp - b.maxTemp,
      },
      {
        title: 'Min pH',
        dataIndex: 'minPh',
        key: 'minPh',
        sorter: (a, b) => a.minPh - b.minPh,
      },
      {
        title: 'Max pH',
        dataIndex: 'maxPh',
        key: 'maxPh',
        sorter: (a, b) => a.maxPh - b.maxPh,
      },
      {
        title: 'Min Water Hardness',
        dataIndex: 'minWaterHardness',
        key: 'minWaterHardness',
        sorter: (a, b) => a.minWaterHardness - b.minWaterHardness,
      },
      {
        title: 'Max Water Hardness',
        dataIndex: 'maxWaterHardness',
        key: 'maxWaterHardness',
        sorter: (a, b) => a.maxWaterHardness - b.maxWaterHardness,
      },

    ];

    return(
      <div>
        <Table dataSource={fishStub} columns={transactionColumns}/>
      </div>
    );
  }
}

export default MainTable;
