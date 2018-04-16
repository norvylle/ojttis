import React, { Component } from 'react';
import './../css/App.css';
import {Button,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class InternUpdate extends Component{
	constructor(props){
		super(props)
		this.state = {
			database:"intern",
			update:"",
			value:"",
			key:"student_no",
			search:"",
			date_started: "",
			hrsworked:"",
			hrsreq:"",
			company_name:"",
			validation:"",
			message:""
		}
		autoBind(this);
	}

	handleSearch(e){
		this.setState({search:e.target.value});
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

	update1(){
		if(this.state.date_started !== "" && this.state.search !== ""){
			this.setState({update:"date_started"});
			this.setState({value:this.state.date_started});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
      			.then((response) => {return response.json();})
	      		.then((result) => {this.setState({message:"Updated Successfully"});})
			}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	update2(){
		if(this.state.hrsworked !== "" && this.state.search !== ""){
			this.setState({update:"no_of_hours_worked"});
			this.setState({value:this.state.hrsworked});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
      			.then((response) => {return response.json();})
	      		.then((result) => {this.setState({message:"Updated Successfully"});})
			}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	update3(){
		if(this.state.hrsreq !== "" && this.state.search !== ""){
			this.setState({update:"no_of_hours_required"});
			this.setState({value:this.state.hrsreq});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
      			.then((response) => {return response.json();})
	      		.then((result) => {this.setState({message:"Updated Successfully"});})
			}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	
	update5(){
		if(this.state.company_name !== "" && this.state.search !== ""){
			this.setState({update:"company_name"});
			this.setState({value:this.company_name});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
      			.then((response) => {return response.json();})
	      		.then((result) => {this.setState({message:"Updated Successfully"});})
			}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	validate(){
		fetch(`http://localhost:3001/search?database=${this.state.database}&pk=student_no&value=${this.state.search}`)
      .then((response)=> {return response.json() })
      .then((result) => {if(result[0] !== undefined){this.setState({validation:"Record Found!"});
      	this.setState({date_started:result[0].date_started});
      	this.setState({hrsworked:result[0].no_of_hours_worked});
      	this.setState({hrsreq:result[0].no_of_hours_required});
      	this.setState({company_name:result[0].company_name});
  	}})	
	}

	render(){
		return(
		<div>
			<br/>
			<input placeholder="Student Number" className="input" onChange={this.handleSearch}/><br/><br/>
			<Button content="Validate" size="big" onClick={this.validate}/><br/><br/>{this.state.validation}<br/>
            <input placeholder="New Date Started" className="input" type="date" value={this.state.date_started} onChange={this.handledate_started}/><Button content="Update" size="big" onClick={this.update1}/><br/>
            <input placeholder="New Number of Hours Worked" className="input" value={this.state.hrsworked} onChange={this.handlehrsworked}/><Button content="Update" size="big" onClick={this.update2}/><br/>
            <input placeholder="New Number of Hours Required" className="input" value={this.state.hrsreq} onChange={this.handlehrsreq}/><Button content="Update" size="big" onClick={this.update3}/><br/>
			<input placeholder="New Company Name" className="input" value={this.state.company_name} onChange={this.handleCompany}/><Button content="Update" size="big" onClick={this.update5}/><br/><br/>
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

export default InternUpdate;