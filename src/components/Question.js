import React, { Component } from 'react';
import InlineEditText from './InlineEditText'



class Question extends React.Component{

	constructor(props){
		super(props);

		this.state={

			hint: this.props.val,
		}

	}

	UNSAFE_componentWillMount(){

		//alert("will mount");

	}

	componentWillUnmount(){
		

		//alert("will unmount");

	}

	handleChange(text){

		var id = this.props.id;
		this.props.updateQuestion(id,text);
	}

	handleDelete(){


		var id = this.props.id;

		this.props.deleteQuestion(id);



	}

	render(){
	//	alert("render");
		return(

		<div >
		
		<InlineEditText showdelete= {true} hint = {this.state.hint} editing={true} ondelete={this.handleDelete.bind(this)} onchangeval={this.handleChange.bind(this)}/>
		
		
		</div>
		)
		;

	}


}

export default Question;