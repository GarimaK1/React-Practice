import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

const App = () => {
  useEffect(() => {
    // to initialize javascript for materialize-css components requiring javascript 
    // e.g. modals etc.
    M.AutoInit();
  });

  return (
    <div>
      <h1>IT Logger with Redux</h1>
    </div>
  );
}

export default App;
