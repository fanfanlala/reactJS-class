/**
 * Created by dllo on 17/9/12.
 */
import React,{ Component } from 'react'
import { BrowserRouter as Router, Route ,Link,Switch} from  'react-router-dom'
import SmallComing from './SmallComing'
import SmallNowPlaying from './SmallNowplaying'
class ControlSmall extends Component {
  titleClick = (e) => {
    this.refs.now.style.color = '#6a6a6a'
    this.refs.coming.style.color = '#6a6a6a'
    e.target.style.color = '#fc7103 '
  }
  render () {
    return (
      <Router>
        <div>
          <ul className="control-nav clearFloat">
            <li className="left" ref='now' onClick={this.titleClick}><Link to="/" >正在热映</Link></li>
            <li className="right"  onClick={this.titleClick} ref='coming'><Link to="/smallComing">即将上映</Link></li>
          </ul>
          <div className="control-line"></div>
          <Switch>
            <Route exact path="/" component={SmallNowPlaying} />
            <Route path="/smallComing" component={SmallComing} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default ControlSmall