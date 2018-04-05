//InlineEditText.js

import React, { Component } from 'react';



class InlineEditText extends React.Component{

	constructor(props){
		super(props);

		this.state={

			text: this.props.hint,
			editing: this.props.editing,
			showdelete: this.props.showdelete,
		
		};

	}

componentWillReceiveProps(nextProps) {
   
     if (nextProps.hint !== this.state.text) {
    this.setState({ text: nextProps.hint });
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
	handleClickDelete(){

		this.props.ondelete();


		
	}


	displayTextOrEditField(){

		const deleteButton = this.state.showdelete? <button onClick= {this.handleClickDelete.bind(this)}> Delete </button> : null;

		if(this.state.editing){
			return <div>
					<input onChange= {this.handleChange.bind(this)} value= {this.state.text} placeholder= {this.props.hint} />
					<button onClick= {this.handleClickDone.bind(this)}>Done</button>
					</div>
		}
		else{
			return <div>
					<div onClick= {this.handleClickText.bind(this)}>
					<h4>{this.state.text}</h4> 
					</div>

					{deleteButton}
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