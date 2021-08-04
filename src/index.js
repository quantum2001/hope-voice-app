import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Iventory from './Iventory';
import './inventory.css'
import NavBar from './components/NavBar'
import EditItem from './components/NavBar'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='container'>
            <NavBar />
          </div>
        </Route>
        <Route exact path='/inventory'>
          <Iventory />
        </Route>
        <Route path='/inventory/edit/:id' children={<EditItem />}>
        </Route>

      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

