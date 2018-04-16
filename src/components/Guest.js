import React, { Component } from 'react';
import './../css/App.css';
import {Button} from 'semantic-ui-react';

class Guest extends Component{
	render(){
		return(
			<div>
			<br/>
			<a href={"/student-search"}><Button content='Search Student' icon="search" labelPosition='left' size="big"/></a>
			<a href={"/ojt-search"}><Button content='Search Company' icon="search" labelPosition='left' size="big"/></a>
			<a href={"/intern-search"}><Button content='Search Intern' icon="search" labelPosition='left' size="big"/></a><br/>
			<br/>
			<a href={"/view-all"}><Button content='View All' icon="unhide" labelPosition='left' size="big"/></a>
			<br/><br/>
			<a href={"/"}><Button content='Logout' icon="log out" labelPosition='left' size="big"/></a>
			<br/><br/><br/>
			</div>
		);
	}
}

export default Guest;