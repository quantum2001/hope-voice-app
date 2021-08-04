import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Iventory from './Iventory';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/inventory'>
          <Iventory />
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

