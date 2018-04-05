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

		this.setState({

			hint: text,

		});

		var id = this.props.id;
		this.props.updateQuestion(id,text);
	}


	componentWillReceiveProps(nextProps) {
   
     if (nextProps.val !== this.state.hint) {
    this.setState({ hint: nextProps.val });
  }
}
	handleDelete(){


		var id = this.props.id;

		this.props.deleteQuestion(id);



	}

	render(){
	//	alert("render");
	console.log("CreateForm Reder");
		return(

		<div >
		
		<InlineEditText showdelete= {true} hint = {this.state.hint} editing={true} ondelete={this.handleDelete.bind(this)} onchangeval={this.handleChange.bind(this)}/>
		
		
		</div>
		)
		;

	}


}

export default Question;