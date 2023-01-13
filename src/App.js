import React, { Component } from 'react';
import Nav from './components/Nav';
import CV from './components/CV';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <CV />
      </div>
    );
  }
}

export default App;
