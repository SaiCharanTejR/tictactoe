import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridArr: [
        {'key': 1, 'value': ''},
        {'key': 2, 'value': ''},
        {'key': 3, 'value': ''},
        {'key': 4, 'value': ''},
        {'key': 5, 'value': ''},
        {'key': 6, 'value': ''},
        {'key': 7, 'value': ''},
        {'key': 8, 'value': ''},
        {'key': 9, 'value': ''}
      ],
      toggleSign: false,
      gameWon: false,
      gridCnt:9,
      gameDraw: false
    };
  };
  handleGridClick = (index) => {
    let gridArr = [...this.state.gridArr];
    let gameWon = this.state.gameWon;
    let gridCnt = this.state.gridCnt;
    
    if(!gridArr[index].value && !this.state.gameWon){
      gridArr[index].value = this.state.toggleSign ? 'O' : 'X';      
      if(gridCnt === 1){
        this.setState({gameDraw: true, gridArr})
        return false;
      }
      let winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];

      winningCombos.forEach(e => {
        if(gridArr[e[0]].value !== '' && gridArr[e[0]].value === gridArr[e[1]].value && gridArr[e[1]].value === gridArr[e[2]].value) {
          gameWon = true;
        }
      });

    this.setState({gridArr, toggleSign: gameWon ? this.state.toggleSign : !this.state.toggleSign, gameWon, gridCnt: --gridCnt});
    }
  }
  handleGameReset = () => {
    this.setState({
      gridArr: [
        {'key': 1, 'value': ''},
        {'key': 2, 'value': ''},
        {'key': 3, 'value': ''},
        {'key': 4, 'value': ''},
        {'key': 5, 'value': ''},
        {'key': 6, 'value': ''},
        {'key': 7, 'value': ''},
        {'key': 8, 'value': ''},
        {'key': 9, 'value': ''}
      ],
      toggleSign: false,
      gameWon: false,
      gridCnt:9,
      gameDraw: false
    })
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Tic Tac Toe</h2>
          <div className="grid-container">
            {this.state.gridArr.map( (e, i) => <div className="grid-item" onClick={() => this.handleGridClick(i)} key={e.key}>{e.value}</div>)}
          </div>
          {this.state.gameWon || this.state.gameDraw ? <><span>{this.state.gameDraw ? 'Game ended in a draw' : `${this.state.toggleSign ? 'O' : 'X'} is winner`}</span><button onClick={this.handleGameReset}>Play again</button></> : ''}
        </header>
      </div>
    );
  }
  
}

export default App;
