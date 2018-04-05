//InlineEditText.js

import React, { Component } from 'react';



class InlineEditText extends React.Component{

	constructor(props){
		super(props);

		this.state={

			text: this.props.hint,
			editing: this.props.editing,

		
		}

	}


	handleChange(e){

		//alert("handleChange");

		this.setState({

			text: e.target.value

		});

		const text = e.target.value;
		this.props.onchangeval(text);

	}

	handleClickText()
	{
				
		this.setState({

			editing:true
		});

	}

	handleClickDone(){

		this.setState({

			editing:false
		});
	}


	displayTextOrEditField(){

		if(this.state.editing){
			return <div>
					<input onChange= {this.handleChange.bind(this)} value= {this.state.text} />
					<button onClick= {this.handleClickDone.bind(this)}>Done</button>
					</div>
		}
		else{
			return <div onClick= {this.handleClickText.bind(this)}>
					<h4> {this.state.text}</h4>

					
					</div>
		}


	}

	render(){

		return(

		<div >
		
		{this.displayTextOrEditField()}
		
		
		</div>
		)
		;

	}


}

export default InlineEditText;