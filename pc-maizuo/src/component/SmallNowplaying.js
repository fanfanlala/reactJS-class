/**
 * Created by dllo on 17/9/11.
 */
import React, {Component} from 'react'
class SmallNowplaying extends Component {
  state = {
    smallNowPlaying: []
  }

  componentDidMount() {
    fetch('v4/api/film/now-playing?page=1&count=7', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          smallNowPlaying: response.data.films
        })
      })
  }

  render() {
    let smallNowArr = this.state.smallNowPlaying.map((item, index) => {
      return (
        <div className="smallNow clearFloat" key={index.toString()}>
          <div className="left smallNow-img">
            <img src={item.cover.origin} alt="" width={60} />
          </div>
          <div className="right smallNow-right">
            <div className="smallNow-name clearFloat">
              <span className="left">{item.name}</span>
              <span className="right">{item.grade}</span>
            </div>
            <div className="smallNow-intro">{item.intro}</div>
            <div className="smallNow-count">
              <span>{item.cinemaCount}</span>
              <span>家影院上映</span>
              <span>{item.watchCount}</span>
              <span>人购票</span>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        {smallNowArr}
      </div>
    )
  }
}
export default SmallNowplaying