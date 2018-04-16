import React, { Component } from 'react';
import './../css/App.css';
import {Button,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class Intern extends Component{
	constructor(props){
		super(props)
		this.state = {
			database:"intern",
			date_started: "",
			hrsworked:"",
			hrsreq:"",
			company_name:"",
			studno: "",
			message:""
		}
		autoBind(this);
	}

	handlestudno(e){
		this.setState({studno:e.target.value});
	}
	handledate_started(e){
		this.setState({date_started:e.target.value});
	}

	handlehrsreq(e){
		this.setState({hrsreq:e.target.value});
	}

	handlehrsworked(e){
		this.setState({hrsworked:e.target.value});	
	}

	handleCompany(e){
		this.setState({company_name:e.target.value});	
	}

	submit(){
		if(this.state.date_started !== "" && this.state.hrsworked !== "" && this.state.studno !== ""){
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
            <input placeholder="Date Started" className="input" type="date" onChange={this.handledate_started}/><br/>
            <input placeholder="Number of Hours Worked" className="input" onChange={this.handlehrsworked}/><br/>
            <input placeholder="Number of Hours Required" className="input" onChange={this.handlehrsreq}/><br/>
			<input placeholder="Student Number" className="input" onChange={this.handlestudno}/><br/>
			<input placeholder="Company Name" className="input" onChange={this.handleCompany}/><br/><br/>
            <Button content="Submit" size="big" onClick={this.submit}/><br/><br/>
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

export default Intern;