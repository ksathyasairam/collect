//Dashboard.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormBox extends React.Component{


 	handleClickDelete(){


 		var id = this.props.val.formId;

 		this.props.onDelete(id);


 	}


 	render(){

 		const val= {

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

    };
 		return(
 				<div> 
 							<div style={{margin : "5px"}}>

 							{this.props.val.formId}
							<br/>
							{this.props.val.formName}
							<br/>
							{this.props.val.formDescription}
							<br/>

 							</div>
							
							<div style = {{marginTop:"5px"}}>
							<button>Submit Response</button>
							<button onClick={this.handleClickDelete.bind(this)}>Delete</button>

							<Link to ="/result" val={val}>
							<button>Results</button>
							</Link>
							</div>
				</div>

 			);
 	}
 }



class FormList extends React.Component{

	constructor(props){
		super(props);



	}



	getFormList(){

		return(

					this.props.val.map((f)=>{

						return <div style = {{border:"solid", margin: "5px", padding:"10px"}}>

								<FormBox key= {f.formId} val={f}  onDelete= {this.props.onDelete}/>

								</div>

					})


			);


			

	}
	render(){

		var style={

			border: "solid",
		}

		return (

				<div style={style}>

				{this.getFormList()}
					
				</div>
				
			);
	}
}

export default FormList;