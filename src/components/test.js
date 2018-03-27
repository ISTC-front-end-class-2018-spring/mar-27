import React from 'react';

export default
class Test extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.name}</span>
        <input type='text' />
      </div>
    )
  }
}