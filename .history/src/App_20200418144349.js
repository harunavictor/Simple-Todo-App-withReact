import React from 'react';
import './App.css';
import Todos from './component/Todos';

function App() {
    state= { 
  todos:[
    {id:1,
      title:"Sleep"}
  ]
    }
  return (
    <div className="App">
       <Todos/>
    </div>
  );
}

export default App;
