/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
class SearchBar extends Component{
    render(){
        return(
            <div>
                <input type="text" placeholder="搜索...."/>
                <br/>
                <input type="checkbox"/><label>只展示有库存的</label>
            </div>
        )
    }
}
export default SearchBar;