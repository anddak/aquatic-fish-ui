import React from 'react';
import MainTable from "./components/MainTable";
import SearchForm from "./components/advanced-search/search-form/SearchForm";
import AdvancedSearch from "./components/advanced-search/AdvancedSearch";

function App() {
  return (
    <div className="App">
      {/*<AdvancedSearch/>*/}
      <SearchForm/>
      <MainTable/>
    </div>
  );
}

export default App;
