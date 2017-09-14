/**
 * Created by dllo on 17/9/12.
 */
import React, { Component} from 'react'
class SmallComing extends Component {
  state = {
    smallComing: []
  }
  componentDidMount() {
    fetch('v4/api/film/coming-soon?page=1&count=7', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          smallComing: response.data.films
        })
      })
  }
  render () {
    let smallNowArr = this.state.smallComing.map((item, index) => {
      return (
        <div className="smallNow clearFloat" key={index.toString()}>
          <div className="left smallNow-img">
            <img src={item.cover.origin} alt="" width={60} />
          </div>
          <div className="right smallNow-right">
            <div className="smallNow-name clearFloat">
              <span className="left">{item.name}</span>
            </div>
            <div className="smallNow-intro">{item.intro}</div>
            <div className="smallNow-time smallNow-count">
              <span style={{color:'#fc7103'}}>9月15日上映</span>
              <span>星期五</span>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>{smallNowArr}</div>
    )
  }
}
export default SmallComing