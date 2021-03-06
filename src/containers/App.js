import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import Scroll from '../components/Scroll'
import './App.css';

class App extends React.Component
{
	constructor()
	{
		super();
		this.state = {
			robots: [],
			searchField:''
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users', {headers: {'Access-Control-Allow-Origin': '*'}})
			.then(response=> response.json())
				.then(users=> [this.setState({robots: users})]);
	}	onSearchChange = (event) =>
	{
		this.setState({searchField:event.target.value});		
	}

	render()
	{
		const filterRobots = this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if(this.state.robots.length === 0){
			return <h1>Loading </h1>;
		} else{
			return (
				<div className = 'tc'>
					<h1 className = 'f1'> RoboFriends</h1>
					<SearchBox searchChange = {this.onSearchChange} />
					<Scroll>
						<CardList robots={filterRobots}/>
					</Scroll>
				</div>
			);
		}
	}
}

	
export default App;