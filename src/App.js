import React from 'react';
import logo from './logo.svg';
import './App.css';
import DoAllTheThings from './DoAllTheThings';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      input: 0,
      status: false,
      completion: false,
      adder: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <DoAllTheThings time={this.state.time} />
          {this.state.adder.map((one, i) => {
            return (
              <DoAllTheThings time={this.state.time} key={i} />
            )
          })}
          <br></br>
          <button onClick={this._addTimer}>Add Timer</button>
        </header>
      </div>
    );
  }

  _addTimer = () => {
    this.addOne = 1
    this.setState({
      adder: this.state.adder.concat(this.addOne)
    })
  }

}

export default App;
