import React, { Component } from 'react';
import './../css/App.css';
import { Table,Button,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class ViewCandidates extends Component{


	constructor(props){
		super(props)
		this.state = {
			candidates:[]
		}
		autoBind(this);
	}

	componentDidMount() {
      fetch('http://localhost:3001/view-candidates')
      .then((response)=> {return response.json() })
      .then((result) => {this.setState({candidates:result})})
	}

	render(){
		return(
		<div>
		<Table celled selectable inverted>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell colspan="7" textAlign="center">Candidate Students</Table.HeaderCell>
	          	</Table.Row>
			</Table.Header>
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
			{this.state.candidates.map((item,index)=>{
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
            <a href={oldURL} class="login">
            <Button animated size="huge">
      		<Button.Content visible>Back</Button.Content>
      			<Button.Content hidden>
        		<Icon name='left arrow' />
     			 </Button.Content>
    		</Button>
            </a>
         </div>
		);
	}
}

export default ViewCandidates;
