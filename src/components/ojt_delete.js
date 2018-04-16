import React, { Component } from 'react';
import './../css/App.css';
import {Button,Table,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class OjtDelete extends Component{
	constructor(props){
		super(props)
		this.state = {
			database:"company",
			company_name: "",
			company:[],
			message:""
		}
		autoBind(this);		
	}

	handleCompanyName(e){
		this.setState({company_name:e.target.value});
	}

	delete(){
		if(this.state.company_name !== ""){
			fetch(`http://localhost:3001/delete?state=${encodeURIComponent(JSON.stringify(this.state))}`)
      		.then((response) => {return response.json();})
      		.then((result) => {if(result.info.affectedRows >= 1){this.setState({message:"Deleted Successfully"});}})

      		fetch('http://localhost:3001/view?database=company')
      		.then((response)=> {return response.json() })
      		.then((result) => {this.setState({company:result})})

      		this.forceUpdate();
		}
		else{
			this.setState({message:"Please specify missing field/s"});
		}
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
			<input placeholder="Company Name" className="input" onChange={this.handleCompanyName}/><br/><br/>
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

export default OjtDelete;