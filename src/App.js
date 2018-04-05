import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateForm from './components/CreateForm'

class App extends Component {

  constructor(props){

    super(props);
    this.state={

      db:{ },

      };


  }
  render() {


    const style = {

      margin : "auto",
      width  : "50%"
    }
    return (

<div style={style}>
      <CreateForm/>
      
</div>
    );
  }
}

export default App;
