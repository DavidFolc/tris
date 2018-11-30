import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      writex: true,
      board: [

      ]
    }
    for (let i = 0; i < 9; i++) {
      this.state.board.push(
        {
          idx: i,
          val: ""
        }
      )
    }
  }

  play(idx) {
    const text=this.state.writex ? 'x' : 'o';
    const board = this.state.board;
if (board[idx].val == "o" || board[idx].val == "x"){

  return;
}


    board[idx].val = text;
    this.setState({board:board,
    writex: !this.state.writex
    });
  }
  render() {

    return (
      <div className="tris">
        <div className="riga">
          <div key = {0} onClick={ () => {this.play(0)}}>{this.state.board[0].val}</div>
          <div key = {1} onClick={ () => {this.play(1)}}>{this.state.board[1].val}</div>
          <div key = {2} onClick={ () => {this.play(2)}}>{this.state.board[2].val}</div>
        </div>

        <div className="riga">
          <div key = {3} onClick={ () => {this.play(3)}}>{this.state.board[3].val}</div>
          <div key = {4} onClick={ () => {this.play(4)}}>{this.state.board[4].val}</div>
          <div key = {5} onClick={ () => {this.play(5)}}>{this.state.board[5].val}</div>
        </div>

        <div className="riga">
          <div key = {6} onClick={ () => {this.play(6)}}>{this.state.board[6].val}</div>
          <div key = {7} onClick={ () => {this.play(7)}}>{this.state.board[7].val}</div>
          <div key = {8} onClick={ () => {this.play(8)}}>{this.state.board[8].val}</div>
        </div>
      </div>
    );
  }
}

export default App;
