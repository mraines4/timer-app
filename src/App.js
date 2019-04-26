import React from 'react';
import logo from './logo.svg';
import './App.css';
import TotalTime from './TotalTime';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      input: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TotalTime input={this.state.input} handleType={this._handleType} />
        </header>
      </div>
    );
  }

  _handleType = (input) => {
    this.setState({
      input: input
    })
  }
}

export default App;
