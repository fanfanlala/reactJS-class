import React, { Component } from 'react';
import './App.css';
import List from './componennts/List'
import { connect } from 'react-redux'
/*
* 1.安装
* yarn add redux react-redux
* npm i -S redux react-redux
* 2.基本概念
* store
* action
* Reducer
*    1>  创建 store (store 有且只有一个）
*    2>  创建 reducer  为函数  参数1： state   参数2： action
*    3>  获取 store 中的状态，通过getState()
*    4>  修改 store 中的状态，通过dispatch(),参数为 action
* 3.
*    1>  在根元素中 添加 Provider， Provider 需要属性：store
*    2>  在需要用到 redux 的地方，引入 connect 组件名 = connect()(组件名）
*    3>  在需要获取状态的组件中，设置对应的状态 -> 属性 的过程
* */
class App extends Component {
  onKeyDown = (ev)=> {
    // if (ev.keyCode === 13) {
    //   // 处理输入的内容
    //   this.handleInputValue()
    // }
    ev.keyCode === 13 && this.handleInputValue()
  }
  handleInputValue = () => {
    this.props.dispatch({type: 'ADD_ITEM', item:this.refs.inputText.value})
    console.log(this.props)
    this.refs.inputText.value = ''
    this.refs.inputText.blur()
  }
  render() {
    // console.log('redux:' ,this.props)
    return (
      <div>
        <input type="text" onKeyDown={this.onKeyDown} ref="inputText" />
        <List  />
      </div>
    );
  }
}
App = connect()(App)
export default App;
