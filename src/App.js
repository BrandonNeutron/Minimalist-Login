import React, {Component} from 'react';
import logo from './logo.svg';
import Login from './components/login/Login';
import './App.css';
//import 'node_modules/bootstrap/dist/css/bootstrap.css';
import Firebase from 'firebase';
import config from './config';


class App extends Component {
  constructor(props){
    super(props);
    Firebase.initializeApp(config.firebase);
  }

  render(){
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;
