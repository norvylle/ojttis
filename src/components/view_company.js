import React, { Component } from 'react';
import './../css/App.css';
import { Table,Button,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class ViewCompany extends Component{


	constructor(props){
		super(props)
		this.state = {
			company:[]
		}
		autoBind(this);
	}

	componentDidMount() {
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

export default ViewCompany;
