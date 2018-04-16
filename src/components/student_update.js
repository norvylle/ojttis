import React, { Component } from 'react';
import './../css/App.css';
import {Button,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class StudentUpdate extends Component{
	constructor(props){
		super(props)
		this.state={
			database:"student",
			update:"",
			value:"",
			key:"student_no",
			search:"",
			lname: "",
			fname: "",
			scholarship:"",
			course:"",
			units:"",
			school:"",
			validation:"",
			message:"",
		}
		autoBind(this);
	}

	handleSearch(e){
		this.setState({search:e.target.value});
	}
	handleLName(e){
		this.setState({lname:e.target.value});
	}
	handleFName(e){
		this.setState({fname:e.target.value});
	}

	handleScholarship(e){
		this.setState({scholarship:e.target.value});
	}

	handleCourse(e){
		this.setState({course:e.target.value});	
	}

	handleUnits(e){
		this.setState({units:e.target.value});		
	}

	handleSchool(e){
		this.setState({school:e.target.value});		
	}

	update2(){
		if(this.state.lname !== "" && this.state.search !== ""){
			this.setState({update:"last_name"});
			this.setState({value:this.state.lname});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
	      		.then((response) => {return response.json();})
	      		.then((result) => {this.setState({message:"Updated Successfully"});})}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	update3(){
		if(this.state.fname !== "" && this.state.search !== ""){
			this.setState({update:"first_name"});
			this.setState({value:this.state.fname});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
	      		.then((response) => {return response.json();})
	      		.then((result) => {this.setState({message:"Updated Successfully"});})}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	update4(){
		if(this.state.school !== "" && this.state.search !== ""){
			this.setState({update:"school"});
			this.setState({value:this.state.school});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
	      		.then((response) => {return response.json();})
	      		.then((result) => {this.setState({message:"Updated Successfully"});})}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	update5(){
		if(this.state.course !== "" && this.state.search !== ""){
			this.setState({update:"course"});
			this.setState({value:this.course});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
	      		.then((response) => {return response.json();})
	      		.then((result) => {this.setState({message:"Updated Successfully"});})}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	update6(){
		if(this.state.units !== "" && this.state.search !== ""){
			this.setState({update:"no_of_units"});
			this.setState({value:this.units});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
	      		.then((response) => {return response.json();})
	      		.then((result) => {this.setState({message:"Updated Successfully"});})}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	update7(){
		if(this.state.scholarship !== "" && this.state.search !== ""){
			this.setState({update:"scholarship"});
			this.setState({value:this.state.scholarship});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
	      		.then((response) => {return response.json();})
	      		.then((result) => {this.setState({message:"Updated Successfully"});})}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	

	validate(){
		fetch(`http://localhost:3001/search?database=${this.state.database}&pk=student_no&value=${this.state.search}`)
      .then((response)=> {return response.json() })
      .then((result) => {if(result[0] !== undefined){this.setState({validation:"Record Found!"});
      	this.setState({lname:result[0].last_name});
		this.setState({fname:result[0].first_name});
		this.setState({scholarship:result[0].scholarship});
		this.setState({course:result[0].course});
		this.setState({units:result[0].no_of_units});
		this.setState({school:result[0].school});
  }})	
	}

	render(){
		return(
		<div>
			<br/>
			<input placeholder="Student Number" className="input" onChange={this.handleSearch}/><br/><br/>
            <Button content="Validate" size="big" onClick={this.validate}/><br/><br/>{this.state.validation}<br/>
			<input placeholder="New Last Name" className="input" value={this.state.lname} onChange={this.handleLName}/><Button content="Update" size="big" onClick={this.update2}/><br/>
			<input placeholder="New First Name" className="input" value={this.state.fname} onChange={this.handleFName}/><Button content="Update" size="big" onClick={this.update3}/><br/>
            <input placeholder="New School" className="input" value={this.state.school} onChange={this.handleSchool}/><Button content="Update" size="big" onClick={this.update4}/><br/>
            <input placeholder="New Course" className="input" value={this.state.course} onChange={this.handleCourse}/><Button content="Update" size="big" onClick={this.update5}/><br/>
            <input placeholder="New No. of Units" className="input" type="number" min="0" value={this.state.units} onChange={this.handleUnits}/><Button content="Update" size="big" onClick={this.update6}/><br/>
            <input placeholder="New Scholarship" className="input" value={this.state.scholarship} onChange={this.handleScholarship}/><Button content="Update" size="big" onClick={this.update7}/><br/><br/>
            <br/><br/>
            <a href={oldURL} className="login">
            <Button animated size="big">
      		<Button.Content visible>Back</Button.Content>
      			<Button.Content hidden>
        		<Icon name='left arrow' />
     			 </Button.Content>
    		</Button>
            </a><br/><br/>{this.state.message}<br/><br/><br/>
         </div>
		);
	}
}

export default StudentUpdate;