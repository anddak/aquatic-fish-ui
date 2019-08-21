import React from 'react';
import {WrappedAdvancedSearch} from "./fish-db-components/AdvancedSearch";
import MainTable from './fish-db-components/MainTable';

export const FishDatabase = () => {
  return (
      <div>
        <WrappedAdvancedSearch/>
        <MainTable/>
      </div>
  );
};
