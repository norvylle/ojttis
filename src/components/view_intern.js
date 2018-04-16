import React, { Component } from 'react';
import './../css/App.css';
import {Table,Button,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class ViewIntern extends Component{


	constructor(props){
		super(props)
		this.state = {
			intern:[]
		}
		autoBind(this);
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

export default ViewIntern;
