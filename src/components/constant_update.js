import React, { Component } from 'react';
import './../css/App.css';
import {Button,Icon,Table} from 'semantic-ui-react';

var oldURL = document.referrer;
const autoBind = require('auto-bind');

class ConstantUpdate extends Component{
	constructor(props){
		super(props)
		this.state = {
			database:"constant",
			update:"",
			value:"",
			key:"variable",
			search:"",
			val: "",
			desc:"",
			message:"",
			cons:[],
		}
		autoBind(this);
	}

	handleSearch(e){
		this.setState({search:e.target.value});
	}

	handleValue(e){
		this.setState({val:e.target.value});
	}

	handleDescription(e){
		this.setState({desc:e.target.value});
	}


	update1(){
		if(this.state.val !== "" && this.state.search !== ""){
			this.setState({update:"value"});
			this.setState({value:this.state.val});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
      			.then((response) => {return response.json();})
      			.then((result) => {this.setState({message:"Updated Successfully"});
      				this.forceUpdate();
      		})
			}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	update2(){
		if(this.state.desc !== "" && this.state.search !== ""){
			this.setState({update:"description"});
			this.setState({value:this.state.desc});
			if(this.state.value !== ""){
				fetch(`http://localhost:3001/update?state=${encodeURIComponent(JSON.stringify(this.state))}`)
      			.then((response) => {return response.json();})
      			.then((result) => {this.setState({message:"Updated Successfully"});
      				this.forceUpdate();
      		})
			}
		}
		else{
			this.setState({message:"Blank field not allowed."});
		}
	}

	validate(){
		fetch(`http://localhost:3001/search?database=${this.state.database}&pk=variable&value=${this.state.search}`)
      .then((response)=> {return response.json() })
      .then((result) => {if(result[0] !== undefined){this.setState({validation:"Record Found!"});
      	this.setState({val:result[0].value});
      	this.setState({desc:result[0].description});
  	}})	
	}

	componentDidMount() {
		fetch('http://localhost:3001/view?database=constant')
      .then((response)=> {return response.json() })
      .then((result) => {this.setState({cons:result})})
    }

	render(){
		return(
		<div>
			<Table celled selectable inverted>
			<Table.Header>
				<Table.Row>
	          		<Table.HeaderCell>Variable</Table.HeaderCell>
	          		<Table.HeaderCell>Value</Table.HeaderCell>
	          		<Table.HeaderCell>Description</Table.HeaderCell>
        		</Table.Row>
        	</Table.Header>
				{this.state.cons.map((item,index)=>{
					return(<Table.Row key={index}>
						<Table.Cell>{item.variable}</Table.Cell>
						<Table.Cell>{item.value}</Table.Cell>
						<Table.Cell>{item.description}</Table.Cell>
					</Table.Row>)
				})}
		</Table>

			<br/>
			<input placeholder="Constant" className="input" onChange={this.handleSearch}/><br/><br/>
            <Button content="Validate" size="big" onClick={this.validate}/><br/><br/>{this.state.validation}<br/>
            <input placeholder="New Value" className="input" value={this.state.val} onChange={this.handleValue}/><Button content="Update" size="big" onClick={this.update1}/><br/><br/>
            <input placeholder="New Description" className="input" value={this.state.desc} onChange={this.handleDescription}/><Button content="Update" size="big" onClick={this.update2}/><br/><br/>
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

export default ConstantUpdate;