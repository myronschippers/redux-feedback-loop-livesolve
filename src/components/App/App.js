import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Page Components
import HomePage from '../HomePage/HomePage';
// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
      </div>
    );
  }
}

export default App;