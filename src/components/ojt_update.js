import React, { Component } from 'react';
import './../css/App.css';
import {Button,Icon} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class OjtUpdate extends Component{
	constructor(props){
		super(props)
		this.state = {
			database:"company",
			update:"",
			value:"",
			key:"company_name",
			search:"",
			address: "",
			message:"",
		}
		autoBind(this);
	}

	handleSearch(e){
		this.setState({search:e.target.value});
	}

	handleLocation(e){
		this.setState({address:e.target.value});
	}

	update2(){
		if(this.state.address !== "" && this.state.search !== ""){
			this.setState({update:"address"});
			this.setState({value:this.state.address});
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
		fetch(`http://localhost:3001/search?database=${this.state.database}&pk=company_name&value=${this.state.search}`)
      .then((response)=> {return response.json() })
      .then((result) => {if(result[0] !== undefined){this.setState({validation:"Record Found!"});
      	this.setState({address:result[0].address})
  	}})	
	}

	render(){
		return(
		<div>
			<br/>
			<input placeholder="Company Name" className="input" onChange={this.handleSearch}/><br/><br/>
            <Button content="Validate" size="big" onClick={this.validate}/><br/><br/>{this.state.validation}<br/>
            <input placeholder="New Address" className="input" value={this.state.address} onChange={this.handleLocation}/><Button content="Update" size="big" onClick={this.update2}/><br/><br/>
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

export default OjtUpdate;