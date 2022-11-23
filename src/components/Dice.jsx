import React, { Component } from "react";

export default class Dice extends Component {
  state = {
    dice: null,
  };

  randNum = (e) => {
    if (e.key === " ") {
      this.setState({
        dice: Math.ceil(Math.random() *6),
      
      });
    }
  };

  clickDice = (e) => {
    this.setState({ dice: Math.ceil(Math.random() * 6) });
  };

  componentDidMount() {
    window.addEventListener("keyup", this.randNum);
  }

  render() {
    let { dice} = this.state;
    return (
      <div className="diceDiv">
        <div className="dice dice" onClick={this.clickDice}>
          {dice}
        </div>
      </div>
    );
  }
}
