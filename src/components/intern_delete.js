import React, { Component } from 'react';
import './../css/App.css';
import {Button,Table,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class InternDelete extends Component{
	constructor(props){
		super(props)
		this.state = {
			database:"intern",
			intern:[],
			studno: "",
			message:""
		}
		autoBind(this);
	}

	handleStudentNo(e){
		this.setState({studno:e.target.value});
	}

	delete(){
		if(this.state.studno !== ""){
			fetch(`http://localhost:3001/delete?state=${encodeURIComponent(JSON.stringify(this.state))}`)
      		.then((response) => {return response.json();})
      		.then((result) => {if(result.info.affectedRows >= 1){this.setState({message:"Deleted Successfully"});}})

      		fetch('http://localhost:3001/view?database=intern')
      		.then((response)=> {return response.json() })
      		.then((result) => {this.setState({intern:result})})
      		this.forceUpdate();
		}
		else{
			this.setState({message:"Please specify missing field/s"});
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/view?database=intern')
      .then((response)=> {return response.json() })
      .then((result) => {this.setState({intern:result})})
    }

	render(){
		return(
		<div>
			<Table celled selectable inverted>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell>Student No.</Table.HeaderCell>
	          		<Table.HeaderCell>Date Started</Table.HeaderCell>
	          		<Table.HeaderCell>No. of Hours Worked</Table.HeaderCell>
	          		<Table.HeaderCell>No. of Hours Required</Table.HeaderCell>
        		</Table.Row>
        	</Table.Header>
				{this.state.intern.map((item,index)=>{
					return(<Table.Row key={index}>
						<Table.Cell>{item.student_no}</Table.Cell>
						<Table.Cell>{item.date_started}</Table.Cell>
						<Table.Cell>{item.no_of_hours_worked}</Table.Cell>
						<Table.Cell>{item.no_of_hours_required}</Table.Cell>
					</Table.Row>)
				})}
		</Table>
			<br/>
			<input placeholder="Student Number" className="input" onChange={this.handleName}/><br/><br/>
            <Button content="Delete" size="big" onClick={this.delete}/>
            <br/><br/>
            <a href={oldURL} className="login">
            <Button animated size="big">
      		<Button.Content visible>Back</Button.Content>
      			<Button.Content hidden>
        		<Icon name='left arrow' />
     			 </Button.Content>
    		</Button>
            </a><br/><br/>{this.state.message}
         </div>
		);
	}
}

export default InternDelete;