import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(...props)
    this.state = {
      count: 1,
    }
  }
  onClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div>
        <ul>
          <li>{1 * this.state.count}</li>
          <li>{2 * this.state.count}</li>
          <li>{3 * this.state.count}</li>
        </ul>
        <button onClick={() => this.onClick()}>+ 1</button>
      </div>
    )
  }
}
