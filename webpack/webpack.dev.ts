/**
 *
 * @author vidy[Of2732号]
 * company qianmi.com
 * Date 2017-11-07
 *
 */
import WebpackBaseConfig from './webpack.base';
import {Configuration} from "webpack";

// const webpack = require("webpack");


const WebpackDevConfig = {
    ...WebpackBaseConfig,
    ...{
        devtool: "source-map",
        devServer: {
            port: 7777,
            disableHostCheck: true,
            historyApiFallback: true,
        }

    }
} as Configuration;
export default WebpackDevConfig;