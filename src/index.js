import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Iventory from './Iventory';
import './inventory.css'
import NavBar from './NavBar'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='container'>
            <NavBar />
          </div>
        </Route>
        <Route path='/inventory'>
          <Iventory />
        </Route>

      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

