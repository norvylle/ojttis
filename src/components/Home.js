import React, { Component } from 'react';
import './../css/App.css';
import { Button} from 'semantic-ui-react';

class Home extends Component{
	render(){
		return(
			<div>
			<br/>
			<a href={"/admin"} class="login"><Button content='Enter as Admin' icon='spy' labelPosition='right' size="huge"/></a> <br/><br/><br/>

			<a href={"/employee"}><Button content='Enter as Employee' icon='user' labelPosition='right' size="huge"/></a> <br/><br/><br/>

			<a href={"/guest"}><Button content='Enter as Guest' icon='users' labelPosition='right' size="huge"/></a> <br/><br/>
			</div>
		);
	}
}

export default Home;