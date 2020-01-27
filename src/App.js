import React, { Component } from 'react';
import './App.css';

const forbes = require('forbes-list')


class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          personName: "Jeff Bezos",
          rank: 1
        }, 
        {
          personName: "Bill Gates",
          rank: 2
        }, 
        {
          personName: "Warren Buffet", 
          rank: 3
        }
      ]
    }

  }

  componentDidMount() {
 
    forbes.list({ limit: 10 }).then(response => {
      this.setState({ people: response })
    })
  }

  // only needs to change a part of the dom instead of the entire thing
  render() {
    return (
      <div className="App">
        {this.state.people.map(person => <h1 key={person.rank}> {person.personName} </h1>)}
      </div>
    );
  }
}

export default App;
