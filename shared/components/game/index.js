import React, { Component }   from 'react';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'Game';
  }
  render() {
    return (
      <canvas id="canvas" width="600px" height="300px"></canvas>
    );
  }
}