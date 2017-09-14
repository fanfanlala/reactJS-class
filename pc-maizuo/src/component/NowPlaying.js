/**
 * Created by dllo on 17/9/11.
 */
import React, {Component} from 'react'
import {Link} from  'react-router-dom'
// import {BrowserRouter as Router, Route ,Link,Switch} from 'antd-mobile/lib'
// import SmallNowplaying from './SmallNowplaying'
class NowPlaying extends Component {
  state = {
    films: [],
    coming: []
  }
  filmArr = (array) => {
    let nowPlaying = array.map((item, index) => {
      return (
        <Link to={`/everFilms/${item.id}`}>
          <div className="nowPlaying clearFloat" key={index.toString()}>
            <img src={item.cover.origin} width={328} alt="" />
            <div className="nowPlaying-name left">
              <div>{item.name}</div>
              <div>{item.cinemaCount}家影院上映&nbsp;{item.watchCount}人购票</div>
            </div>
            <div className="nowPlaying-grade right">{item.grade}</div>
          </div>
        </Link>
      )
    })
    return nowPlaying
  }

  componentDidMount() {
    fetch('v4/api/film/now-playing?__t=1504944275968&page=1&count=5', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          films: response.data.films
        })
      })
    fetch('v4/api/film/coming-soon?__t=1504944275971&page=1&count=3', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          coming: response.data.films
        })
      })
  }

  render() {
    let nowPlaying = this.filmArr(typeof this.state.films !== 'undefined' ? this.state.films : [])
    let coming = this.filmArr(typeof this.state.coming !== 'undefined' ? this.state.coming : [])
    return (
      <div>
        {nowPlaying}
        <div className="moreFilm">更多热映电影</div>
        <div className="line">
          <div className="lineContent">即将上映</div>
        </div>
        {coming}
        <div className="moreFilm">更多即将上映电影</div>
      </div>
    )
  }
}
export default NowPlaying