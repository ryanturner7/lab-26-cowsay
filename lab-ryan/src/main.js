import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
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
       <h1> Cowsay lorem ipsum </h1>
       <button onClick={this.handleClick}> click me </button>
       <pre>{this.state.content}</pre>
     </div>
   );
 }
}
ReactDom.render( <App />, document.getElementById('root'));
