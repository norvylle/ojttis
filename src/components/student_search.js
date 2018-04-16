import React, { Component } from 'react';
import './../css/App.css';
import {Button,Segment,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;

class StudentSearch extends Component{
	constructor(props){
		super(props)
		this.state = {
			database:"student",
			pk:"student_no",
			value: "",
			message:{}
		}
		this.handleValue = this.handleValue.bind(this);
		this.handleButton = this.handleButton.bind(this);
		this.setMessage = this.setMessage.bind(this);
	}

	handleValue(e){
		this.setState({value:e.target.value});
	}
	setMessage(result){
  		if(result !== undefined){
  			var msg={
    			studno:result.student_no,
    			lname:result.last_name,
    			fname:result.first_name,
    			course:result.course,
    			school:result.school,
    			units:result.no_of_units,
    			scholarship:result.scholarship
  			}
  			this.setState({message:msg})
  		}
    }
	handleButton(e){
		fetch(`http://localhost:3001/search?database=${this.state.database}&pk=${this.state.pk}&value=${this.state.value}`)
      .then((response)=> {return response.json() })
      .then((result) => {this.setMessage(result[0])})	
    }
	render(){
		return(
		<div>
			<br/>
			<input placeholder="Student No" className="input" onChange={this.handleValue}/><br/><br/>
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
            <Segment inverted compact color="grey">Student no: {this.state.message.studno}</Segment>
            <Segment inverted compact color="grey">Last Name: {this.state.message.lname}</Segment>
            <Segment inverted compact color="grey">First Name: {this.state.message.fname}</Segment>
            <Segment inverted compact color="grey">School: {this.state.message.school}</Segment>
            <Segment inverted compact color="grey">Course: {this.state.message.course}</Segment>
            <Segment inverted compact color="grey">No. of Units: {this.state.message.units}</Segment>
            <Segment inverted compact color="grey">Scholarship: {this.state.message.scholarship}</Segment>
            </Segment.Group>
         </div>
		);
	}
}

export default StudentSearch;