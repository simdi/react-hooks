import React, { Component } from 'react'

export class ClassMouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  logEventPosition = e => {
    this.setState({ x: e.clientX, y: e.clientY });
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.logEventPosition);
  }

  render() {
    const { x, y } = this.state;

    return (
      <div>
        X - { x }, Y - { y }
      </div>
    )
  }
}

export default ClassMouse;
