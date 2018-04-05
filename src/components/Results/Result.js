//Result.js

import React, { Component } from 'react';
import './Result.css';

class ResultRow extends React.Component{

	getRowData(ans){


		return(

				ans.map((a)=>{


					return <td>{a.response}</td>
				})

				
			);
	}
	getTableRows(){

			return( this.props.val.map((r)=>{

						return <tr>
								<td>{r.responseid}</td>

								{this.getRowData(r.ans)}
								
								
							   </tr>

					})
				);

	}

	render(){

		return(
				<div>


					{this.getTableRows()}
				</div>

			);
	}

}

class ResultHeder extends React.Component{

	getTableHeader(){

			return( this.props.val.map((q)=>{

						return <th>
							
								{q.question}
								
							   </th>

					})
				);

	}

	render(){

		return(
				<tr>
					<th>ResID</th>
					{this.getTableHeader()}


				</tr>
				

				
			);
	}

}





class Result extends React.Component{


	render(){

		return (

				<div>


					<table >
  						
   							 <ResultHeder val= {this.props.val.questionList}/>
  						
  						
    						 <ResultRow  val = {this.props.val.responsesList}/>
 					   
					</table>

				</div>
			);
	}

}


export default Result;