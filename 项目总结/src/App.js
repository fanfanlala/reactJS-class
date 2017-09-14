import React, {Component, PropTypes} from 'react'
import './assets/styles/App.styl'
// import City from './components/City'
import ExperienceCity from './components/AntDesign'
// 城市练习
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      select: 1,
      title: [{title: ''}],
      time: new Date().toLocaleTimeString()
    }
  }
  static childContextTypes = {
    time: PropTypes.string
  }
  getChildContext () {
    return {
      time: this.state.time
    }
  }
  componentDidMount () {
    // setInterval(() => {
    //   this.setState({
    //     time: new Date().toLocaleTimeString()
    //   })
    // })
    // setTimeout(() => {
    //   this.setState({
    //     select: 2,
    //     title: [{title: '今天天气好晴朗'}, {title: '处处好风光'}, {title: '蝶儿也忙'}, {title: '蜜儿也忙'}]
    //   })
    // }, 5000)
  }
  // selectIndex = (event) => {
  //   this.setState({
  //     select: Number(event.target.innerText)
  //   })
  // }
  render () {
    return (
      <div>
        {
          // <City select={this.state.select} selectIndex={this.selectIndex} title={this.state.title} />
        }
        <ExperienceCity />
      </div>
    )
  }
}
App.childContextTypes = {
  time: React.PropTypes.object.isRequired
}
export default App
