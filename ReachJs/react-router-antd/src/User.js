/**
 * Created by dllo on 17/9/9.
 */
import React, {Component} from 'react'
class User extends Component {
  render () {
    console.log(this.props.match)
    return (
      <h1>欢迎，User {this.props.match.params.username}</h1>
    )
  }
}
export default User