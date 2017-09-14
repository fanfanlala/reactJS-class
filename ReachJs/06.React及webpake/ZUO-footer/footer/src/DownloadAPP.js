/**
 * Created by dllo on 17/8/23.
 */
import React,{Component} from 'react'
import './foot.css'
import Img from './scan.png'
class DownloadApp extends Component{
    render(){
        return(
            <div>
                <img src={Img} alt="" className="downloadImg" width={436} height={440}/>
            </div>
        )
    }
}
export default DownloadApp