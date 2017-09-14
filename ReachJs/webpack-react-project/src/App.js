import React, {Component} from 'react'
import './assets/styles/App.styl'
class App extends Component {
  render () {
    return (
      <div>
        <h1>APP</h1>
        <img src={require('./assets/images/timg2.jpg')} />
      </div>
    )
  }
}
export default App
