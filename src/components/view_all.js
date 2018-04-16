import React, { Component } from 'react';
import './../css/App.css';
import { Table,Button,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class ViewAll extends Component{


	constructor(props){
		super(props)
		this.state = {
			student:[],
			intern:[],
			company:[],
		}
		autoBind(this);
	}

	componentDidMount() {
		fetch('http://localhost:3001/view?database=student')
      .then((response)=> {return response.json() })
      .then((result) => {this.setState({student:result})})

      fetch('http://localhost:3001/view?database=intern')
      .then((response)=> {return response.json() })
      .then((result) => {this.setState({intern:result})})

      fetch('http://localhost:3001/view?database=company')
      .then((response)=> {return response.json() })
      .then((result) => {this.setState({company:result})})
	}

	render(){
		return(
		<div>
		<Table celled selectable inverted>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell colspan="7" textAlign="center">Student</Table.HeaderCell>
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

		<Table celled selectable inverted>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell colspan="5" textAlign="center">Intern</Table.HeaderCell>
	          	</Table.Row>
			</Table.Header>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell>Student No.</Table.HeaderCell>
	          		<Table.HeaderCell>Date Started</Table.HeaderCell>
	          		<Table.HeaderCell>No. of Hours Worked</Table.HeaderCell>
	          		<Table.HeaderCell>No. of Hours Required</Table.HeaderCell>
	          		<Table.HeaderCell>Company Name</Table.HeaderCell>
        		</Table.Row>
        	</Table.Header>
				{this.state.intern.map((item,index)=>{
					return(<Table.Row key={index}>
						<Table.Cell>{item.student_no}</Table.Cell>
						<Table.Cell>{item.date_started}</Table.Cell>
						<Table.Cell>{item.no_of_hours_worked}</Table.Cell>
						<Table.Cell>{item.no_of_hours_required}</Table.Cell>
						<Table.Cell>{item.company_name}</Table.Cell>
					</Table.Row>)
				})}
		</Table>
		<Table celled selectable inverted>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell colspan="2" textAlign="center">Company</Table.HeaderCell>
	          	</Table.Row>
			</Table.Header>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell>Company Name</Table.HeaderCell>
	          		<Table.HeaderCell>Address</Table.HeaderCell>
        		</Table.Row>
        		</Table.Header>
				{this.state.company.map((item,index)=>{
					return(<Table.Row key={index}>
						<Table.Cell>{item.company_name}</Table.Cell>
						<Table.Cell>{item.address}</Table.Cell>
					</Table.Row>)
				})}
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

export default ViewAll;
