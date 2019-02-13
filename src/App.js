import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './layouts/Header';
import Login from './components/Login';
import CrearLugar from './components/CrearLugar';
import firebaseConfig from './config/FirebaseConfig';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);    
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    firebaseConfig.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      } else {
        this.setState({ user: null});
      }
    });
  }

  render() {
    return (
      <Fragment className="App">
          <Header />
          {this.state.user ? (<CrearLugar />) : (<Login />) }        
          
      </Fragment>
    );
  }
}

export default App;
