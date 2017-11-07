/**
 *
 * @author vidy[Of2732号]
 * company qianmi.com
 * Date 2017-11-07
 *
 */
import  * as webpack from 'webpack';
import * as HtmlWebpackPlg from 'html-webpack-plugin';
import * as path from "path";
import {Configuration} from "webpack";
const HtmlCleanWebpackPlg = require('clean-webpack-plugin');
const cwd = process.cwd();
const cwdResolve = (dir:string) => path.resolve(cwd, dir);
const SRC_PATH = cwdResolve( 'src');

const config : Configuration = {
    entry: {
        vendor: ['react', 'react-dom'],
        app: cwdResolve('./src/index.tsx'),
    },
    output: {
        filename: '[name]_[hash].bundle.js',
        path: cwdResolve('dist'),
        // publicPath:`http://localhost:5555`
    },
    plugins: [
        new HtmlCleanWebpackPlg(['dist']),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new HtmlWebpackPlg({
            title: 'react-app-ts',
            template: cwdResolve('./src/index.ejs')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: 2,
            filename: 'vendor-[hash].js',


        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        rules: [
            {
            enforce: 'pre',
            test: /\.js$/,
            loader: "source-map-loader",
            include: SRC_PATH
        },{
            test: /\.ejs$/,
            loader: 'ejs-loader',
            query: {
                includePaths: [
                    path.resolve(__dirname, './src/index.ejs'),
                ],
            },
        },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
                include: SRC_PATH
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: "source-map",
    devServer: {
        port: 7777,
        disableHostCheck: true,
        //contentBase:`${__dirname}/dist`,
    }
};
module.exports = config;