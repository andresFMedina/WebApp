import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './layouts/Header';
import Login from './components/Login';
import CrearLugar from './components/CrearLugar';

class App extends Component {
  render() {
    return (
      <Fragment className="App">
          <Header />
          <CrearLugar />
          <Login />
      </Fragment>
    );
  }
}

export default App;
