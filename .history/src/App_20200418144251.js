import React from 'react';
import './App.css';
import Todos from './component/Todos';

function App() {
    state= { 
  todos:[
    
  ]
    }
  return (
    <div className="App">
       <Todos/>
    </div>
  );
}

export default App;
