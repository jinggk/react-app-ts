/**
 *
 * @author vidy[Of2732号]
 * company qianmi.com
 * Date 2017-11-07
 *
 */

import  WebpackBaseConfig  from './webpack.base';
import {Configuration} from "webpack";
const HtmlCleanWebpackPlg = require('clean-webpack-plugin');

const webpack = require("webpack");

const WebpackProdConfig = {...WebpackBaseConfig} as Configuration;
// 打包前 先清空旧包
WebpackProdConfig.plugins.unshift(new HtmlCleanWebpackPlg(['dist']));
WebpackProdConfig.plugins= WebpackProdConfig.plugins.concat([
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    }),
    new webpack.optimize.UglifyJsPlugin(),
]);


export default WebpackProdConfig;