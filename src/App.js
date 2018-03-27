import React from 'react';
import Test from './components/test';

export default
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {name: 'elem0', id: 0},
        {name: 'elem1', id: 1}
      ]
    };
  }
  
  
  addItem = () => {
    const id = Math.random()*999;
    this.setState({
      list: [ {name: `elem${id}`, id} , ...this.state.list]
    });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.addItem}>Add</button>
        {this.state.list.map((elem) =>
          <Test
            {...elem}
            key={JSON.stringify(elem)}
          />
        )}
      </div>
    )
  }
}