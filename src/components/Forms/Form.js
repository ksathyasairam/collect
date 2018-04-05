//Form.js
import React, { Component } from 'react';

import QuestionList from './QuestionList'

function FormTitle(props) {
  return <h1>{props.val}</h1>;
}


function FormDescription(props) {
  return <h1>{props.val}</h1>;
}

class Form extends React.Component{

	constructor(props){

		super(props);

		var response=[];
		
		this.props.schema.questionList.forEach( function (ques)
		{
    		response.push({
    			rid: ques.qid,
    			response: ""

    		});
		});



		this.state={


			responsesList:response,
		}

		this.handleResponseChange= this.handleResponseChange.bind(this);
		this.handleClickSubmit= this.handleClickSubmit.bind(this);
	}

	handleResponseChange(id,text){


		var responseTemp= this.state.responsesList;

		var index = responseTemp.findIndex(r => r.rid===id)

		responseTemp[index].response= text;


		this.setState({
			responsesList:responseTemp,


		});



	}

	handleClickSubmit(){

		alert(JSON.stringify(this.state.responsesList));
	}

	render(){


		return(
				<div>


				<FormTitle val= {this.props.schema.formName}/>

				<FormDescription val = { this.props.schema.formDescription}/>

				<QuestionList val = {this.props.schema.questionList} onResponseChange={this.handleResponseChange}/>
				
				<button onClick={this.handleClickSubmit} >Submit</button>




				</div>




			);
	}



}


export default Form;