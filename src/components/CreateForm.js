//CreateForm.js
import React, { Component } from 'react';
import Question from "./Question";
import InlineEditText from "./InlineEditText";
class CreateForm extends React.Component{

	constructor(props){

		super(props);

		this.state={

			formName:"",
			formDescription:"",
			questionList:[],
			questionId: 0,
		}
	}
	handleClickAddQuestion(){


		var questionListTemp= this.state.questionList;
		var questionIdTemp= this.state.questionId +1 ;


		questionListTemp.push({

			qid: questionIdTemp,
			question:"Ask a Question?"

		});
	


		this.setState({

			questionList:questionListTemp,
			questionId : questionIdTemp

		});

	}
	handleClickCreateForm(){


		alert(JSON.stringify(this.state));
	}

	updateQuestion(id, text){

		var questionListTemp= this.state.questionList;

		var index = questionListTemp.findIndex(q => q.qid===id)

		questionListTemp[index].question= text;


		this.setState({
			questionList:questionListTemp,

		});


	}

	deleteQuestion(id){

		var questionListTemp= this.state.questionList;

		var index = questionListTemp.findIndex(q => q.qid===id);


		var temp = questionListTemp.splice(index,1);

		//alert( id  + "deleteQuestion CreateForm" +index + JSON.stringify(temp) + JSON.stringify(questionListTemp));


		this.setState({
			questionList: questionListTemp

		});
	}


	updateFormName(text){

	this.setState({
			formName:text,

		});

	}


	updateFormDescription(text){


		this.setState({
			formDescription:text,

		});


	}
	getQuestionList(){


		return (

				this.state.questionList.map(

							(ques) => {

								return <div> <Question id={ques.qid} val={ques.question}  deleteQuestion= {this.deleteQuestion.bind(this)} updateQuestion={this.updateQuestion.bind(this)} /></div>;
									
								
							}
				 	)


				
			);
	}

	render(){

		

		return(

				<div>
						<div>
                  				<h1> Create Form </h1>
								<InlineEditText hint= "Untitled Form" onchangeval={this.updateFormName.bind(this)}/>
								<InlineEditText hint= "Form Descrption" onchangeval= {this.updateFormDescription.bind(this)}/>

						</div>
				
						<br/>

						<div>

								<button onClick= {this.handleClickAddQuestion.bind(this)}> Add Question </button>
								{this.getQuestionList()}

						</div>

						<br/>
						<br/>
						<br/>
						<br/>
						<div>

							<button onClick= {this.handleClickCreateForm.bind(this)}> Create Form </button>

						</div>

				

				
				
				
				</div>



			);


	}


}


export default CreateForm;