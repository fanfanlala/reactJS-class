/**
 * Created by dllo on 17/8/21.
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:path.join(__dirname,'src','index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js/,
                exclude:/node_modules/,
                use:'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:
                    'url-loader',
            },

            {
                test:/\.css/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
           filename:'index.html',
            template:'./index.html'
        })
    ]
}