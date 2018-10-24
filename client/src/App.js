import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

import Home from './components/layout/Home.js';
import History from './components/History.js';
import Student from './components/Student.js';
import Pairing from './components/Pairing.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <h1>
              <Link className="head" to="/">
                Pairing system
              </Link>
            </h1>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/student" component={Student} />
              <Route exact path="/pairing" component={Pairing} />
              <Route exact path="/history" component={History} />
            </div>

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
