import React, { Component } from 'react';
import './App.css';
import Todos from './component/Todos';

class App extends Component {
  state = { 
    todos:[
      {id:1,
      tit}
    ]
   }
  render() { 
    return (<div>
      <Todos/>
    </div>);
  }
}
 
export default App;