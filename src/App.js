import {Component} from 'react'

import './index.css'

import "./App.css"

class App extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  generate = () => {
    const randomNumber = this.getRandomNumber()

    this.setState( {count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className='card'>
        <h2 className='heading'>Random Number</h2>
        <p className='bio'>Generate a random number in the range of 0 to 100</p>
        <button className='btn' onClick={this.generate} >Generate</button>
        <h1 className='number'>{count}</h1>
      </div>
    )
  }
}

export default App
