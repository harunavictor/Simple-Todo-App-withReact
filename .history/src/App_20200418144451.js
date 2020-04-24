import React from 'react';


function App() {
    state= { 
  todos:[
    {id:1,
      title:"Sleep in my room"}
  ]
    }
  return (
    <div className="App">
       <Todos/>
    </div>
  );
}

export default App;
