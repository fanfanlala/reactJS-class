/**
 * Created by dllo on 17/8/21.
 */
let path = require('path');
module.exports = {
    //入口  入口文件字符串
    entry:path.join(__dirname,'src','index.js'),
    //输出 输出方式
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    //loader
    module:{
        //loaders  之前为loaders:[]
        rules:[
            {
                //匹配字段
                test:/\.js$/,
                //忽略node——modules
                exclude:/node_modules/,
                //loaders
                loader:"babel-loader"
            }
        ]
    }
}