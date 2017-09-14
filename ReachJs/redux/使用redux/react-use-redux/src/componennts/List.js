/**
 * Created by dllo on 17/9/11.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'

class List extends Component {
  render () {
    // console.log('List-redux:' ,this.props.getState())
    const listElement = this.props.list.map((item, index) => {
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
const listProps = (state) => ({
  list: state
})
List = connect(listProps)(List)
export default List