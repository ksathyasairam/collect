//Dashboard.js
import React, { Component } from 'react';
import FormList from './FormList'


class Dashboard extends React.Component{

	constructor(props){
		super(props);

		this.state={
			forms:[],
		}

		this.handleDeleteForm= this.handleDeleteForm.bind(this);



	}




	UNSAFE_componentWillMount(){

		const jsonFromServer= [
		{
			formId: "1",
			formName: "Form1",
			formDescription: "FormDescription1",
			questionLists: [],
			responseLists:[],

		},
		{

			formId: "2",
			formName: "Form2",
			formDescription: "FormDescription2",
			questionLists: [],
			responseLists:[],

		},

		{

			formId: "3",
			formName: "Form3",
			formDescription: "FormDescription3",
			questionLists: [],
			responseLists:[],

		},

		];


		this.setState(

		{
			forms:jsonFromServer,
		}
			);


	}


	handleDeleteForm(id){

		var formTemp= this.state.forms;

		var index = formTemp.findIndex(f => f.formId===id);

		formTemp.splice(index,1);


		this.setState({
			forms: formTemp,

		});



	}

	render(){


		return (

				<div>

					<h1> Dashboard </h1>

					<div>
					<button> Create from</button>
					</div>

					<FormList val = {this.state.forms} onDelete={this.handleDeleteForm}/>


				</div>
			);
	}
}

export default Dashboard;