import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

Class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: cowsay.say({
        text: 'Hello world!',
        e : 'oO',
        T : "U "
      })
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState(State => {
      return {
        content: cowsay.say({
          text: faker.lorem.sentence(),
          e: "oO",
          T: "U "
        }),
      }
    })
  }

render() {
   return (
     <div>
       <button onClick={this.handleClick}>Click Me</button>
       {cowsay.say({ text: this.state.content }).split("\n").map(i => <div key={keyGen()}>{i}</div>)}
     </div>
   )
 }
ReactDom.render( <App />, document.getElementById('root'));
