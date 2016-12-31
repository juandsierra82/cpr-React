import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
  constructor(){
    super();
    this.name = "Will"
  }
  render(){
    return (
      <h1>It doesnt {this.name} may works!!!</h1>
    );
  }
}
const app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);
