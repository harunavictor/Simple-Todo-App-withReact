import React, { Component } from 'react';
import './App.css';
import Todos from './component/Todos';

class App extends Component {
  state = {  }
  render() { 
    return (<div>
      <Todos></Todos>
    </div>);
  }
}
 
export default App;