/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
import ProductRow from './ProductRow';
class ProductTable extends Component{
    render(){
       const products = this.props.products
       let finalProduct =  products.map((item,index)=>{
          return <ProductRow product={item} key={index.toString()} />
       })
        return(
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {finalProduct}
                </tbody>
            </table>
        )
    }
}
export default ProductTable;