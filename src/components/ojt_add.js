import React, { Component } from 'react';
import './../css/App.css';
import {Button,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class OjtCompany extends Component{
	constructor(props){
		super(props)
		this.state = {
			database:"company",
			company_name: "",
			address: "",
			message:""
		}
		autoBind(this);
	}

	handleCompanyName(e){
		this.setState({company_name:e.target.value});
	}
	handleLocation(e){
		this.setState({address:e.target.value});
	}

	submit(){
		if(this.state.company_name !== "" && this.state.address !== ""){
			fetch(`http://localhost:3001/insert?state=${encodeURIComponent(JSON.stringify(this.state))}`)
      		.then((response) => {return response.json();})
      		.then((result) => {this.setState({message:"Added Successfully"});})
		}
		else{
			this.setState({message:"Please specify missing field/s."});
		}
	}

	render(){
		return(
		<div>
			<br/>
			<input placeholder="Company Name" className="input" onChange={this.handleCompanyName}/><br/>
            <input placeholder="Address" className="input" onChange={this.handleLocation}/><br/><br/>
            <Button content="Submit" size="big" onClick={this.submit}/>
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

export default OjtCompany;
