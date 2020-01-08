import React, { Component } from 'react';

export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    let { count } = this.state;
    this.setState({ count: count + 1 })
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={() => this.incrementCount() }>Count: { count }</button>
      </div>
    )
  }
}

export default ClassCounter;
