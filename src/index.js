import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './App.js';
import celebStats from './stats.js';

let statsList = [].concat(celebStats);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stats: statsList[0]
    };
    statsList.splice(0,1);
  }
  
  pickCeleb = () => {
    if(statsList.length === 0){
      statsList = statsList.concat(celebStats);
    }
    var choice = Math.floor(Math.random() * statsList.length)
    var stats = statsList[choice];
    statsList.splice(choice,1);
    this.setState({stats: stats})
    console.log(statsList)
  }

  calcAge(dob){
    let dob_date = Date.parse(dob);
    let diff = Date.now() - dob_date.getTime();
    let age_ms = new Date(diff);
    return Math.abs(age_ms.getFullYear() - 1970);
  }
  
  render(){
    return (
      <Card info={this.state.stats} nextCeleb={this.pickCeleb}/>
    )
  }
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);