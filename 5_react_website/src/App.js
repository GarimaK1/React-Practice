import React, { Fragment } from 'react';
import DisplayName from "./DisplayName";
import ToDoApp from './ToDoApp';
import Timer from "./Timer";
import BasicExampleRoutes from "./BasicExampleRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <h1>My Playground</h1>
      <DisplayName name="Prop from App.js" />
      <Timer />
      <ToDoApp />
      {/* <BasicExampleRoutes /> */}
    </Fragment>
  );
}

export default App;
