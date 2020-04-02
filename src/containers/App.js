import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import Scroll from '../components/Scroll'
import './App.css';
import {getRobots, searchRobots} from '../services/robots-service';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            loading: false,
            searchQuery: undefined
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        getRobots().then(robots => this.setState({robots, loading: false}))
    }

    onSearchChange = async (event) => {
        let query = event.target.value;
        this.setState({searchQuery: query === '' ? undefined : query});

        try {
            let matchingRobots = searchRobots(query);
            this.setState({robots: matchingRobots});
        } catch (e) {
            console.error('error searching robots', e, {query});
        }
    };

    render() {
        const {loading, robots, searchQuery} = this.state;

        if (loading) {
            return <h1>Loading...</h1>;
        }

        let content;

        if (searchQuery && !robots.length) {
            content = 'No matching robots';
        }

        return (
            <div>
                <div className='header'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </div>
                <div className='content'>
                    <CardList robots={robots} noRobotsText={content}/>;
                </div>

            </div>
        );
    }
}


export default App;
