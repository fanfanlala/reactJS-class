import React, { Component } from 'react';
import './App.css';
import List from './componennts/List'
class App extends Component {
  state = {
    inputValue:''
  }
  onKeyDown = (ev)=> {
    // if (ev.keyCode === 13) {
    //   // 处理输入的内容
    //   this.handleInputValue()
    // }
    ev.keyCode === 13 && this.handleInputValue()
  }
  handleInputValue = () => {
    console.log('处理输入的内容')
    console.log(this.refs.inputText.value)
    this.setState({
      inputValue: this.refs.inputText.value
    },() => {
      this.refs.inputText.value = ''
      this.refs.inputText.blur()
    })
  }
  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.onKeyDown} ref="inputText" />
        <List addItemToLis={this.state.inputValue} />
      </div>
    );
  }
}

export default App;
