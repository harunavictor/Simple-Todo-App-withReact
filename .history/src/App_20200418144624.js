import React, { Component } from 'react';
import './App.css';
import Todos from './component/Todos';

class App extends Component {
  state = { 
    todos:[]
   }
  render() { 
    return (<div>
      <Todos/>
    </div>);
  }
}
 
export default App;