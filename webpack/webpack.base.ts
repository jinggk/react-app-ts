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
const tsImportPluginFactory = require('ts-import-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const cwd = process.cwd();
const cwdResolve = (dir:string) => path.resolve(cwd, dir);
const SRC_PATH = cwdResolve( 'src');

const WebpackBaseConfig : Configuration = {
    entry: {
        vendor: ['react', 'react-dom'],
        app: cwdResolve('./src/index.tsx'),
    },
    output: {
        filename: '[name]-[hash].bundle.js',
        path: cwdResolve('dist'),
        // publicPath:`http://localhost:5555`
    },
    plugins: [

        new HtmlWebpackPlg({
            title: 'react-app-ts',
            template: cwdResolve('./src/index.ejs')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: 2,
            filename: 'vendor-[hash].js',


        }),
        new ExtractTextPlugin({
            filename: '[name]-[hash].css', disable: false, allChunks: true
        }),


    ],
    module: {
        rules: [
            {
                test: /\.(jsx|tsx|js|ts)$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [ tsImportPluginFactory( { style: true } /*opts*/) ]
                    }),
                    compilerOptions: {
                        module: 'es2015'
                    }
                },
                exclude: /node_modules/
            },
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

            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.less$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' }) },
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

};
export default WebpackBaseConfig;