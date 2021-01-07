import React, { Component } from 'react';
import logo from './logo.svg';
import {CardList} from ".//Components/CardList/card-list.component"
import {Searchbox} from "./Components/search-box/search-box.component"
import './App.css';

class App extends React.Component {
  constructor()
  {super();
    this.state={
    monsters:[],
    searchField:""
};
}

componentDidMount()
{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=> response.json())
  .then(users=> this.setState({monsters: users}))
}
  
  
  render() {
    const  monsters =this.state.monsters;
    const searchField=this.state.searchField;
    
    const filter=monsters.filter(monster=>  monster.name.toLowerCase().includes( searchField.toLowerCase())     );
    console.log(filter);
    return (
      <div className="App">
        <h1>MONSTERS ROLOLDEX</h1>
        <Searchbox type="search" placeholder="search for monsters" handleChange={ e=> this.setState({searchField:e.target.value})}   />
        <CardList name="Rahul" monsters={filter} >
      </CardList>
      </div>
    );
  }
}
export default App;
