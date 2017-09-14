/**
 * Created by dllo on 17/8/21.
 */
import React,{Component} from 'react'
import Img from './timg.jpg'
import './App.styl'

class App extends Component {
    render(){
        return(
            <div>
                <img className="MyImg" src={Img}/>
            </div>

    )
    }
}
export default App