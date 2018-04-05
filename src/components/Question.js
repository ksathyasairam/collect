import React, { Component } from 'react';
import InlineEditText from './InlineEditText'



class Question extends React.Component{

	constructor(props){
		super(props);

		

	}

	handleChange(text){

		var id = this.props.id;
		this.props.updateQuestion(id,text);
	}

	render(){

		return(

		<div >
		
		<InlineEditText hint = {this.props.id+this.props.val} editing={true} onchangeval={this.handleChange.bind(this)}/>
		
		
		</div>
		)
		;

	}


}

export default Question;