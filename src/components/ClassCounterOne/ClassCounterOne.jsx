import React, { Component } from 'react'

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const { count } = this.state;
    document.title = `Your clicked ${count} times`;
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Your clicked ${count} times`;
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ count: count + 1 })}>Clicked {count} times</button>
      </div>
    )
  }
}

export default ClassCounterOne
