import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateForm from './components/CreateForm';
import Dashboard from './components/Dashboard/Dashboard';
import Result from './components/Results/Result';
import Form from './components/Forms/Form';

import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";

class App extends Component {

  constructor(props){

    super(props);
    this.state={

      db:{ },

      currenForm:"",

      };


  }


  handleSelect(id){
      this.setState()


  }
  render() {

    var schema = {

      formID : "1",
      formName : "Food Survey",
      formDescription : "This forms helps collect food preferences",
      questionList :  [{ qid: "1", question:"What is your Name?"},
                    { qid: "2", question:"What is your No?"},
                    { qid: "3", question:"Whats is your favourite cuisine?"},
                    { qid: "4", question:"How often do you eat your fav cuisine?"},
                   ],

      responsesList:[
                      { 
                        responseid: "1",
                        ans : [{"rid":"1","response":"Sathya"},{"rid":"2","response":"9871398154"},{"rid":"3","response":"India"},{"rid":"4","response":"Daily"}],

                      },

                      { 
                        responseid: "2",
                        ans : [{"rid":"1","response":"Akku"},{"rid":"2","response":"9899455491"},{"rid":"3","response":"Italian"},{"rid":"4","response":"Often"}],

                      },
                     


                    ],

    }

    const style = {

      margin : "auto",
      width  : "50%"
    }
    return (

<div style={style}>
      
    <Router>

    <Switch>

    <Route exact path="/" component={Dashboard} />
      <Route path="/createform" component={CreateForm} />
      <Route path="/form" component={Form} />
      <Route path="/result" component={Result} />

      </Switch>
    </Router>





     
 
      
</div>
    );
  }
}

export default App;
