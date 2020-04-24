import React, { Component } from 'react';
import './App.css';
import Todos from './component/Todos';

class App extends Component {
  state = { 
    todos:[
      {id:1,
      title:"Sleeping in my "}
    ]
   }
  render() { 
    return (<div>
      <Todos/>
    </div>);
  }
}
 
export default App;