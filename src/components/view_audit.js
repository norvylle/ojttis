import React, { Component } from 'react';
import './../css/App.css';
import {Table,Button,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class ViewAudit extends Component{


	constructor(props){
		super(props)
		this.state = {
			audit:[],
		}
		autoBind(this);
	}

	componentDidMount() {
		fetch('http://localhost:3001/view?database=audit_trail')
      .then((response)=> {return response.json() })
      .then((result) => {this.setState({audit:result})})
    }

	render(){
		return(
		<div>
		<Table celled selectable inverted>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell colSpan="8" textAlign="center">Audit</Table.HeaderCell>
	          	</Table.Row>
			</Table.Header>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell>ID</Table.HeaderCell>
	          		<Table.HeaderCell>Username</Table.HeaderCell>
	          		<Table.HeaderCell>Operation</Table.HeaderCell>
	          		<Table.HeaderCell>Table Name</Table.HeaderCell>
	          		<Table.HeaderCell>Column Name</Table.HeaderCell>
	          		<Table.HeaderCell>Old Value</Table.HeaderCell>
	          		<Table.HeaderCell>New Value</Table.HeaderCell>
	          		<Table.HeaderCell>Date</Table.HeaderCell>
	      		</Table.Row>
			</Table.Header>
			<Table.Body>
			{this.state.audit.map((item,index)=>{
				return(<Table.Row key={index}>
					<Table.Cell>{item.id}</Table.Cell>
					<Table.Cell>{item.user_name}</Table.Cell>
					<Table.Cell>{item.operation}</Table.Cell>
					<Table.Cell>{item.table_name}</Table.Cell>
					<Table.Cell>{item.column_name}</Table.Cell>
					<Table.Cell>{item.old_value}</Table.Cell>
					<Table.Cell>{item.new_value}</Table.Cell>
					<Table.Cell>{item.trans_date}</Table.Cell>
				</Table.Row>)
			})}
			</Table.Body>
		</Table>
			<br/>
            <a href={oldURL} className="login">
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

export default ViewAudit;
