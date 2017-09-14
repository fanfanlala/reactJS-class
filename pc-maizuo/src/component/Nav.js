import React, {Component} from 'react'
import { Drawer, NavBar} from 'antd-mobile/lib'
import { BrowserRouter as Router, Route ,Link,Switch} from  'react-router-dom'
// import HeaderImg from '../image/more.png'
import NowPlaying from './NowPlaying'
import ControlSmall from './ControlSmall'
import EveryFilms from './EveryFilms'
class Nav extends Component {
  state = {
    open: true,
    nowPlaying:[],
    coming:[]
  }
  onOpenChange = () => {
    this.setState({ open: !this.state.open });
  }
  render () {
    const sidebar2 = [
      <div className="header">
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/controlSmall">影片</Link></li>
          <li><Link to="/controlSmall">影院</Link></li>
          <li><Link to="/controlSmall">商城</Link></li>
          <li><Link to="/controlSmall">我的</Link></li>
          <li><Link to="/controlSmall">卖座卡</Link></li>
        </ul>
      </div>
    ]
    return (
      <Router>
        <div>
          <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange} className="my-navbar">卖座电影</NavBar>
          <Drawer
            className="my-drawer"
            style={{minHeight: document.documentElement.clientHeight}}
            enableDragHandle
            open={this.state.open}
            onOpenChange={this.onOpenChange}
            sidebar={sidebar2}>
            <Switch>
              <Route exact path="/" component={NowPlaying} />
              <Route path="/controlSmall" component={ControlSmall} />
              <Route path="/everFilms/:id" component={EveryFilms}/>
            </Switch>
          </Drawer>
        </div>
      </Router>
    )
  }
}
export default Nav
