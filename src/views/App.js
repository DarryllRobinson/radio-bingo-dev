import React, { Component } from 'react';
import { Link, HashRouter as Router, Route, browserHistory } from 'react-router-dom';

import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <header>
            Welcome to Radio Bingo
          </header>
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;
