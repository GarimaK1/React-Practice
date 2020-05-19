import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import ListTechModal from './components/techs/ListTechModal';

const App = () => {
  useEffect(() => {
    // to initialize javascript for materialize-css components requiring javascript 
    // e.g. modals etc.
    M.AutoInit();
  });

  return (
    <Fragment >
      <SearchBar />
      <div className="container">
        <AddBtn />
        <Logs />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <ListTechModal />
      </div>
    </Fragment>
  );
}

export default App;
