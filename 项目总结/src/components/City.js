/**
 * Created by dllo on 17/9/7.
 */
import React, {Component, PropTypes} from 'react'
class City extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cities: []
    }
  }
  static propTypes = {
    select: PropTypes.number,
    selectIndex: PropTypes.func,
    title: PropTypes.object
  }
  static contextTypes = {
    time: PropTypes.string
  }
  componentDidMount () {
    // 获取时间戳
    const time = new Date().getTime()
    // '/api/city?__t=' + time
    // ES6拼接字符串
    fetch(`/api/city?__t=${time}`, {
      method: 'GET'
    })
      .then(response => {
        // 将response转化为json格式
        return response.json()
      })
      .then(response => {
        this.handleCities(response.data.cities)
      })
  }
  handleCities = (cities) => {
    // console.log(cities)
    let citiesFirstCharObj = {}
    cities.forEach(function (item, index) {
      // console.log(item.pinyin[0])
      //  console.log(item.pinyin.substring(0, 1))
      // console.log(item.pinyin.slice(0, 1))
      let firstChar = item.pinyin.slice(0, 1)
      if (typeof citiesFirstCharObj[firstChar] !== 'undefined') {
        citiesFirstCharObj[firstChar].push(item)
      } else {
        citiesFirstCharObj[firstChar] = [item]
      }
    })
    this.setState({
      cities: citiesFirstCharObj
    })
  }
  // 处理城市数组，转化为JSX语法
  handleCityElements = () => {
    let elementArray = []
    // for (let key in this.state.cities) {
    //   console.log(key)
    // }
    let keysArray = Object.keys(this.state.cities)
    keysArray.sort().forEach(key => {
      let cityArray = this.state.cities[key].map(function (item, index) {
        return <span key={index.toString()}>{item.name}</span>
      })
      let cityElement = (
        <div key={key}>
          <h1>{key}</h1>
          {cityArray}
        </div>
      )
      elementArray.push(cityElement)
    })
    return elementArray
  }
  render () {
    console.log(this.props.select)
    return (
      <div>
        <p>city</p>
        {
          // this.handleCityElements()
        }
        <p>选中下标为{this.props.select}的元素</p>
        <button onClick={this.props.selectIndex}>1</button>
        <button onClick={this.props.selectIndex}>2</button>
        <button onClick={this.props.selectIndex}>3</button>
        <p>{this.props.title[0].title}</p>
        <p>{this.context.time}</p>
      </div>
    )
  }
}
City.contextTypes = {
  time: React.PropTypes.object.isRequired
}
export default City
