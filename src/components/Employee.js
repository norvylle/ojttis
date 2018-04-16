import React, { Component } from 'react';
import './../css/App.css';
import {Button,Dropdown} from 'semantic-ui-react';

class Employee extends Component{
	render(){
		return(
			<div>
			<br/><br/>
			<Dropdown text="Student" icon="dropdown" size="massive" fluid button>
			<Dropdown.Menu inverted>
			<Dropdown.Item><a href={"/student-add"}><Button content='Add Student' icon="add" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/student-search"}><Button content='Search Student' icon="search" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/student-update"}><Button content='Update Student' icon="edit" labelPosition='left' size="big" fluid/></a><br/><br/></Dropdown.Item>
			</Dropdown.Menu>
			</Dropdown>
			<br/><br/>
			<Dropdown text="Company" icon="dropdown" size="massive" fluid button>
			<Dropdown.Menu inverted>
			<Dropdown.Item><a href={"/ojt-add"}><Button content='Add Company' icon="add" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/ojt-search"}><Button content='Search Company' icon="search" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/ojt-update"}><Button content='Update Company' icon="edit" labelPosition='left' size="big" fluid/></a><br/><br/></Dropdown.Item>
			</Dropdown.Menu>
			</Dropdown>
			<br/><br/>
			<Dropdown text="Intern" icon="dropdown" size="massive" fluid button>
			<Dropdown.Menu inverted>
			<Dropdown.Item fluid><a href={"/intern-add"}><Button content='Add Intern' icon="add" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/intern-search"}><Button content='Search Intern' icon="search" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/intern-update"}><Button content='Update Intern' icon="edit" labelPosition='left' size="big" fluid/></a><br/><br/></Dropdown.Item>
			</Dropdown.Menu>
			</Dropdown>
			<br/><br/>

			
			<Dropdown text="View" icon="dropdown" size="massive" fluid button>
			<Dropdown.Menu inverted>
			<Dropdown.Item><a href={"/view-all"}><Button content='View All' icon="unhide" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/view-student"}><Button content='View Students' icon="unhide" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/view-two"}><Button content='View Students and OJT Information' icon="unhide" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/view-company"}><Button content='View Companies' icon="unhide" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/view-ojthandled"}><Button content='View Company Information' icon="unhide" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/view-candidates"}><Button content='View OJT Candidates' icon="unhide" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/view-intern"}><Button content='View OJT Status' icon="unhide" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			<Dropdown.Item><a href={"/view-audit"}><Button content='View Audit' icon="unhide" labelPosition='left' size="big" fluid/></a></Dropdown.Item>
			</Dropdown.Menu>
			</Dropdown>
			<br/><br/>
			<a href={"/"}><Button content='Logout' icon="log out" labelPosition='left' size="big"/></a>
			</div>
		);
	}
}

export default Employee;