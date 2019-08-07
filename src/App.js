import React from 'react';
import MainTable from "./components/MainTable";
import {WrappedAdvancedSearch} from "./components/advanced-search/AdvancedSearch"

function App() {
  return (
    <div className="App">
      <WrappedAdvancedSearch />
      <MainTable/>
    </div>
  );
}

export default App;
