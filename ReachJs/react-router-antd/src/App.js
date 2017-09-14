import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Link,Switch} from  'react-router-dom'
import Home from './Home'
import About from './About'
import User from  './User'
/*
React-router
 1.作用：路由  实现单页面应用的根本
 2.版本：React-router-V4  4.0
 3.差异：新版本 和 2.0 与 3.0 有很大的差异

Core(核心):
react-router

web(前端):
react-router-dom(使用）

React Native(RN)
react-router-native

 区别：react-router-dom 和 react-router-native 是基于react-router 之上的封装
 推荐：web应用开发一般推荐 React-router-

 最早 router 的实现是依赖于 hash
 前端路由的实现原理：https://segmentfault.com/a/1190000007238999

 react-router-v4 实现原理基于 History API

 使用
 需要引入的组件 1.BrowserRouter 容器
             2.Route 路由 设置路由的路径以及组件
             3.Link 相当于a标签管理路由跳转
 从 react-router-dom 引入 BrowserRouter as Router 并重命名为Router
 import { BrowserRouter as Router } from  'react-router-dom'

 将browserRouter 作为组件的根标签

 Router 注意：如果设置的路径为根目录（'/')， 需要在属性中添加exact
             exact作业：让路径只适配根目录自己

 match 包含 path、url、params 处理后的参数
 isExact:true
 params:
 {id: "10010", username: "小明"}
 path:"/user/:id/:username"
 url:"/user/10010/小明"

  Switch 保证内容之渲染一个路由
  {下只能展示一个组件（在页面上显示一个组件的内容）}
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <p>react-router</p>
          <ul>
            <li><Link to='/'>主页</Link></li>
            <li><Link to='/about'>关于</Link></li>
            <li><Link to='/user/10010/小明'>用户</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/user/:id/:username' component={User} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
