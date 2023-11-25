import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="head">Random Number</h1>
          <p className="para">Generate a random number in the range 0 to 100</p>
          <button
            className="button"
            type="button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <h1 className="Result">{randomNumber}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
