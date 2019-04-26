import React from 'react';
import logo from './logo.svg';
import './App.css';
import TotalTime from './TotalTime';
import TimeRemaining from './TimeRemaining';
import PauseUnpauseButton from './PauseUnpauseButton';
import ResetButton from './ResetButtton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      input: 0,
      status: false,
      completion: false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TimeRemaining time={this.state.time} completion ={this.state.completion} />
          <TotalTime input={this.state.input} handleType={this._handleType} />
          <PauseUnpauseButton handleClick={this._timerClick} status={this.state.status} />
          <ResetButton handleClick={this._resetClick} />

        </header>
      </div>
    );
  }

  _handleType = (input) => {
    this.setState({
      input: input,
      time: input ? input : 0,
    })
  }
  _timerClick = () => {
    if (this.state.status) {
      clearInterval(this.interval)
      this.setState({
        status: false,
      }) 
    } else {
      this.setState({
        status: true,
        completion: false
      })
      this.interval = setInterval(() => {
        if (this.state.time >= 1) {
          this.setState({
            time: this.state.time - 1,
          })
        } else {
          this.setState({
            time: this.state.input,
            status: false,
            input: this.state.input,
            completion: true
          }, clearInterval(this.interval))
        }
      }, 1000)
    }
  }
  _resetClick = () => {
    clearInterval(this.interval)
    this.setState({
      status: false,
      time: this.state.input,
      completion: false
    })
  }
}

export default App;
