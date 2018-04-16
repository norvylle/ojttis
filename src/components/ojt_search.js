import React, { Component } from 'react';
import './../css/App.css';
import {Button,Segment,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class OjtSearch extends Component{
	constructor(props){
		super(props)
		this.state = {
			database:"company",
			pk: "company_name",
			value:"",
			message:{}
		}
		autoBind(this);
	}

	handleCompanyName(e){
		this.setState({value:e.target.value});
	}

	setMessage(result){
		if(result !== undefined){
			var msg = {
				company_name: result.company_name,
				address: result.address,
			}
			this.setState({message:msg})
		}
	}

	handleButton(){
		fetch(`http://localhost:3001/search?database=${this.state.database}&pk=${this.state.pk}&value=${this.state.value}`)
      .then((response)=> {return response.json() })
      .then((result) => {this.setMessage(result[0])})	
	}

	render(){
		return(
		<div>
			<br/>
			<input placeholder="company Name" className="input" onChange={this.handleCompanyName}/><br/><br/>
            <Button content="Search" size="big" onClick={this.handleButton}/><br/><br/>
            <a href={oldURL} className="login">
            <Button animated size="big">
      		<Button.Content visible>Back</Button.Content>
      			<Button.Content hidden>
        		<Icon name='left arrow' />
     			 </Button.Content>
    		</Button>
            </a><br/><br/>
            <Segment.Group horizontal>
            <Segment inverted compact color="grey">Company Name: {this.state.message.company_name}</Segment>
            <Segment inverted compact color="grey">Address: {this.state.message.address}</Segment>
            </Segment.Group>
         </div>
		);
	}
}

export default OjtSearch;