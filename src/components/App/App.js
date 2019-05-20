import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Component Pages
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportPage from '../SupportPage/SupportPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';

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
          <Route exact path="/" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandingPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/comments" component={CommentsPage} />
          <Route exact path="/confirmation" component={ConfirmationPage} />
        </Router>
      </div>
    );
  }
}

export default App;
