//QuestionList.js

import React, { Component } from 'react';

 class QuestionBox extends React.Component{


 	handleChange(e){

 		var text= e.target.value;
 		var id = this.props.id;

 		this.props.onResponseChange(id,text);



 	}
 	render(){
 		return(
 				<div> 
							<p1>{this.props.val}</p1>
							<br/>
							<input onChange= {this.handleChange.bind(this)}/>
							<br/>
				</div>

 			);
 	}
 }


class QuestionList extends React.Component{

	constructor(props){

		super(props);

	}

	getQuestionBox(){

		return (

			this.props.val.map(

				(ques)=>{

					return <QuestionBox key= {ques.qid} id = {ques.qid} val= {ques.question} onResponseChange= {this.props.onResponseChange}/>;
				}


				)

			);

	}

	render(){


		return(
				<div>


				{this.getQuestionBox()}


				</div>




			);
	}



}

export default QuestionList;