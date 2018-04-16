import React, { Component } from 'react';
import './../css/App.css';
import {Button,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class StudentForm extends Component{
	constructor(props){
		super(props)
		this.state={
			database:"student",
			lname: "",
			fname: "",
			studno: "",
			scholarship:"",
			course:"",
			units:"",
			school:"",
			message:""
		}
		autoBind(this);
	}

	handleLName(e){
		this.setState({lname:e.target.value});
	}
	handleFName(e){
		this.setState({fname:e.target.value});
	}
	handleStudNo(e){
		this.setState({studno:e.target.value});
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

	submit(e){
		if(this.state.lname !== "" && this.state.fname !== "" && this.state.studno !== "" && this.state.scholarship !== "" && this.state.course !== "" && this.state.units !== "" && this.state.school !== ""){
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
            <input placeholder="Student Number" onChange={this.handleStudNo} class="input"/><br/>
			<input placeholder="Last Name" onChange={this.handleLName} class="input"/><br/>
			<input placeholder="First Name" onChange={this.handleFName} class="input"/><br/>
            <input placeholder="School" onChange={this.handleSchool} class="input"/><br/>
            <input placeholder="Course" onChange={this.handleCourse} class="input"/><br/>
            <input placeholder="No. of Units" type="number" min="0" onChange={this.handleUnits} class="input"/><br/>
            <input placeholder="Scholarship" onChange={this.handleScholarship} class="input"/><br/><br/>
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

export default StudentForm;