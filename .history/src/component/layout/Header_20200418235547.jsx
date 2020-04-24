import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header style={'headerStyle}>
        <h1>TodoList </h1>
      </header>
    );
  }
}

export default Header;

const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
