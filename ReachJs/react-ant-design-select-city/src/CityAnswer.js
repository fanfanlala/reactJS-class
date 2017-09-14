/**
 * Created by dllo on 17/9/9.
 */
import React, {Component} from 'react';
import {Button, Select} from 'antd'
import './App.css';
import cities from './handleCity'
const Option = Select.Option
class App extends Component {
  state = {
    proIndex: 0,
    cityIndex: 0,
    areaIndex: 0
  }
  selectProvince = (value) => {
    this.setState({
      proIndex: value
    })
  }
  selectCity = (value) => {
    this.setState({
      cityIndex: value
    })
  }
  selectArea = (value) => {
    this.setState({
      areaIndex: value
    })
  }
  createProvinceElement = () => {
    let elements = cities.map((item, index) => {
      return (
        <Option value={index} key={item.number.toString()}>{item.name}</Option>
      )
    })
    return elements
  }
  createCityElement = () => {
    let proCities = cities[this.state.proIndex].cities
    let citiesElement = proCities.map((city, index) => {
      return (
        <Option value={index} key={city.number.toString()}>{city.name}</Option>
      )
    })
    return citiesElement
  }
  createAreaElement = () => {
    let proCity = cities[this.state.proIndex].cities[this.state.cityIndex]
    let cityAreas = []
    if (typeof proCity === 'undefined') {
      return []
    } else {
    cityAreas = proCity.areas
    }
    let areaElement = cityAreas.map((area, index) => {
      return (
        <Option value={index} key={area.number.toString()}>{area.name}</Option>
      )
    })
    return areaElement
  }

  render() {
    let province = cities[this.state.proIndex]
    let city = province.cities[this.state.cityIndex]
    let cityName = city ? city.name : '无匹配结果'
    let area = city && city.areas[this.state.areaIndex]
    let areaName = area ? area.name : '无匹配结果'
    return (
      <div>
        <Button type="primary">小按钮</Button>
        <Select
          defaultValue={province.name}
          style={{width: '120px'}}
          onChange={this.selectProvince}>
          {this.createProvinceElement()}
        </Select>
        <Select
          defaultValue={cityName }
          style={{width: '120px'}}
          onChange={this.selectCity}
          value={cityName}>
          { this.createCityElement()}
        </Select>
        <Select
          defaultValue={areaName}
          style={{width: '120px'}}
          onChange={this.selectArea}
          value={areaName}>
          { this.createAreaElement() }
        </Select>
      </div>
    );
  }
}

export default App;


