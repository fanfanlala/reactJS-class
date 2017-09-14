/**
 * Created by dllo on 17/9/11.
 */
import React, {Component} from 'react'
class List extends Component {
  state = {
    list: [
      'iphone',
      'iPad'
    ]
  }
  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    this.state.list.push(nextProps.addItemToLis)
  }
  render () {
    const listElement = this.state.list.map((item, index) => {
      return (
        <li key={index.toString()}>{item}</li>
      )
    })
    return (
      <ul>
        {listElement}
      </ul>
    )
  }
}
export default List