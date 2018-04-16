import React, { Component } from 'react';
import './../css/App.css';
import {Button,Table} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');
class StudentDelete extends Component{
	constructor(props){
		super(props)
		this.state = {
			database:"student",
			student:[],
			studno: "",
			message:""
		}
		autoBind(this);
	}

	handleName(e){
		this.setState({studno:e.target.value});
	}
	delete(){
		if(this.state.studno !== ""){
			fetch(`http://localhost:3001/delete?state=${encodeURIComponent(JSON.stringify(this.state))}`)
      		.then((response) => {return response.json();})
      		.then((result) => {if(result.info.affectedRows >= 1){this.setState({message:"Deleted Successfully"});}})

      		fetch('http://localhost:3001/view?database=student')
      		.then((response)=> {return response.json() })
      		.then((result) => {this.setState({student:result})})
      		this.forceUpdate();
		}
		else{
			this.setState({message:"Please specify missing field/s"});
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/view?database=student')
      .then((response)=> {return response.json() })
      .then((result) => {this.setState({student:result})})
    }

	render(){
		return(
		<div>
			<Table celled selectable inverted>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell>Student No.</Table.HeaderCell>
	          		<Table.HeaderCell>First Name</Table.HeaderCell>
	          		<Table.HeaderCell>Last Name</Table.HeaderCell>
	          		<Table.HeaderCell>School</Table.HeaderCell>
	          		<Table.HeaderCell>Course</Table.HeaderCell>
	          		<Table.HeaderCell>No. of Units</Table.HeaderCell>
	          		<Table.HeaderCell>Scholarship</Table.HeaderCell>
	      		</Table.Row>
			</Table.Header>
			<Table.Body>
			{this.state.student.map((item,index)=>{
				return(<Table.Row key={index}>
					<Table.Cell>{item.student_no}</Table.Cell>
					<Table.Cell>{item.last_name}</Table.Cell>
					<Table.Cell>{item.first_name}</Table.Cell>
					<Table.Cell>{item.school}</Table.Cell>
					<Table.Cell>{item.course}</Table.Cell>
					<Table.Cell>{item.no_of_units}</Table.Cell>
					<Table.Cell>{item.scholarship}</Table.Cell>
				</Table.Row>)
			})}
			</Table.Body>
		</Table>
			<br/>
			<input placeholder="Student Number" className="input" onChange={this.handleName}/><br/><br/>
            <Button content="Delete" size="big" onClick={this.delete}/>
            <a href={oldURL}><Button content="Back" size="big" onClick={this.submit}/></a><br/><br/>{this.state.message}
         </div>
		);
	}
}

export default StudentDelete;