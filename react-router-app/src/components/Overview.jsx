import React from 'react';
import TestStore from '../stores/TestStore';
const Overview = () => {
  React.useEffect(() => {
    TestStore.onFetchData();
  }, []);
  return <div>Overview</div>;
};

export default Overview;
