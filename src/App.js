import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './UserOutput/UserOutput.css';
import UserOutput from  './UserOutput/UserOutput'

import UserInput from "./UserInput/UserInput";

class App extends Component{

   state={ username :[
     {name:'alka'},
     {name:'bhoop'}

    ]}

  switchNameHandler=(event)=>{
    this.setState({ username :[
     {name:event.target.value},
     {name:'rathore'}]
    })
  }

    

  render() {
    return (
      <div className="App">
        <h1> Assignment </h1>
        <UserOutput name={this.state.username[0].name}/>
        <UserOutput name={this.state.username[1].name}/>
        <UserInput changed={this.switchNameHandler} name={this.state.username[0].name} />
      </div>
    );
  }
  
}

export default App;
