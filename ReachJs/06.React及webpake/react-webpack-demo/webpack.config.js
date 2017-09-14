/**
 * Created by dllo on 17/8/21.
 */
let path = require('path');
module.exports= {
    entry:path.join(__dirname,'src','index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    /*
    js(ES6,ES7,ES8...) jsx
    需要经过 babel 编译
    使用规则 babel-loader 处理所有 js文件
    配置
    1.   npm install --save-dev babel-loader babel-core
    2.在 config 中添加如下规则
    3.npm install babel-preset-env --save-dev
      npm install --save-dev babel-preset-react
    4.配置 .babelrc 文件
    */

    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}