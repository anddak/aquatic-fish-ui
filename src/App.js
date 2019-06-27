import React from 'react';
import MainTable from "./components/MainTable";
import AdvancedSearch from "./components/advanced-search/AdvancedSearch";

function App() {
  return (
    <div className="App">
      <AdvancedSearch/>
      <MainTable/>
    </div>
  );
}

export default App;
