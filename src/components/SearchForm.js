import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button'; 

const APIKEY = process.env.REACT_APP__API_KEY 
// Your API Key goes here, I'm putting it in .env

// Searchform is in charge of the actual call to the API, 
// It should have a controlled input for searching (what are the 3 things we need to make a controlled input?)
// It will recieve 2 function props, one to pass the current search term to App
// And one to pass the current search results to the App

// This component should have the structure:
// <form>
// 	<label></label>
//	<input type="search"/>
// </form>

class SearchForm extends Component {

	constructor() {
		super();
		console.log(APIKEY);
		this.state = {
			searchInput: ''
		};
	}

	async getSearchResults(query) {
		console.log(query);
		try {
			// Make an Ajax call with Axios here
			const url = 'https://www.rijksmuseum.nl/api/en/collection/';
			const results = await axios.get(url, {
				params : {
					key: APIKEY,
					imgonly: true,
					ps: 20,
					q: query
				}
			});	

			const art = results.data.artObjects;
			this.props.updateArt(art);
			this.props.updateCurrentSearch(this.state.searchInput);
			// console.log(art);
			this.setState({
				searchInput: ''
			})
			// Reset our search form
		} catch (error) {
			console.log(error.message);
		}
	}

	handleSubmit = (e) => {
		//console.log(e);
		e.preventDefault();

		this.getSearchResults( this.state.searchInput);	
	}

	handleChange = (e) => {
		this.setState({
			searchInput: e.target.value
		})
	}

	render() {
		return (
			<form onSubmit={ (event) => {this.handleSubmit(event)}}>
				<label htmlFor=""> Find Some Art:</label>
				<input 
					type="search" 
					name="search"
					id="search"
					value={this.state.searchInput}
					onChange={(event) => this.handleChange(event)}
				>
				</input>	
			</form>
		);
	}
}

export default SearchForm;