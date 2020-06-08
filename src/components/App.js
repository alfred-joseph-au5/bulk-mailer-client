import React, { Component } from 'react';
import '../App.css';
import '../styles/main.css';
import '../styles/signup.css';
import '../styles/login.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes';

class App extends Component {
  render() {
    return (       
        <BrowserRouter>
          {Routes}
        </BrowserRouter>
    );
  }
}

export default App;
