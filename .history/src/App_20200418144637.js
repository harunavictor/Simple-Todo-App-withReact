import React, { Component } from 'react';
import './App.css';
import Todos from './component/Todos';

class App extends Component {
  state = { 
    todos:[
      {id:1,
      title}
    ]
   }
  render() { 
    return (<div>
      <Todos/>
    </div>);
  }
}
 
export default App;