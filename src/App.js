import React, { Component } from 'react'
import CardList from './CardList'
import './css/App.css'
import Robots from './Robots'
import SearchBox from './SearchBox'


class App extends Component {

    constructor() {
        super()
        this.state = {
            Robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({Robots: user}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render() {
        const filtered = this.state.Robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='app'>
                <h1>Robots</h1>
                <SearchBox onSearch={this.onSearchChange}></SearchBox>
                <CardList Robots={filtered}></CardList>
            </div>
        )
    }
}

export default App;