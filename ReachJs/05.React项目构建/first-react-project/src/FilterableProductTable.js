/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
class FilterableProductTable extends Component{
    render(){
       const  products = this.props.products
        return(
            <div>
                <h1>容器</h1>
                <SearchBar/>
                <ProductTable products={products}/>
            </div>
        )
    }
}
export default FilterableProductTable;