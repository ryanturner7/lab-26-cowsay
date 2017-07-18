import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

Class navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header className="cowsay-navbar">
      <h1> counter </h1>
      </header>
    );
  }
}

  class App extends React.Component {
    constructor(props){
      super(props);
      this.state.content = {
        title: "Generate Cowsay Lorem",
        count: 0,
      }
      this.
    }
  }

render() {
   return (
     <div>
       <button onClick={this.handleClick}>Click Me</button>
       {cowsay.say({ text: this.state.content }).split("\n").map(i => <div key={keyGen()}>{i}</div>)}
     </div>
   )
 }
