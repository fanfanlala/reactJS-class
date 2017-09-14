/**
 * Created by dllo on 17/9/13.
 */
import React,{Component} from 'react'
class EveryFilms extends Component {
  componentDidMount () {
    let time = new Date().getTime()
    console.log(time)
    fetch(`v4/api/film/3841?__t=1505351717651`, {
      method:'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response)
      })
  }
  render () {
    // console.log(this.props.match.params.id)
    return (
      <div>9-0</div>
    )
  }
}
export default EveryFilms
