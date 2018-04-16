import React, { Component } from 'react';
import './../css/App.css';
import {Button,Segment,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class InternSearch extends Component{
	constructor(props){
		super(props)
		this.state = {
			database:"intern",
			pk: "student_no",
			value:"",
			message:{}
		}
		autoBind(this);
	}

	handleStudentNo(e){
		this.setState({value:e.target.value});
	}

	setMessage(result){
		if(result !== undefined){
  			var msg = {
				date_started:result.date_started,
				hrsworked:result.no_of_hours_worked,
				hrsreq:result.no_of_hours_required,
				studno: result.student_no,
				company_name: result.company_name
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
			<input placeholder="Student Number" className="input" onChange={this.handleStudentNo}/><br/><br/>
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
            <Segment inverted compact color="grey">Date Started: {this.state.message.date_started}</Segment>
            <Segment inverted compact color="grey">Hours Worked: {this.state.message.hrsworked}</Segment>
            <Segment inverted compact color="grey">Hours Required: {this.state.message.hrsreq}</Segment>
            <Segment inverted compact color="grey">Student no: {this.state.message.studno}</Segment>
            <Segment inverted compact color="grey">Company Name: {this.state.message.company_name}</Segment>
            </Segment.Group>
         </div>
		);
	}
}

export default InternSearch;