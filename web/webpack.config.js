require("babel-polyfill")
const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowerPlugin = require('open-browser-webpack-plugin')
const url = require('url')
const publicPath = '/'

const port = 8040;
const host = `http://localhost:${port}/`;
debugger;
module.exports = (options = {}) => ({
    entry: {
        vendor: './src/vendor',
        index: ["babel-polyfill", './src/main.js']
    },
    output: {
        path: resolve(__dirname, '../resources/static'),
        filename: options.dev ? 'js/[name].js' : 'js/[name].js?[chunkhash]',
        chunkFilename: 'lib/[id].js?[chunkhash]',
        publicPath: options.dev ? '/assets/' : publicPath
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: ["style-loader", "css-loader?modules", {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })
                        ]
                    }
                }, "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: `url-loader?limit=10000&name=image/[hash].[ext]`
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            filename: options.dev ? 'index.html' : '../templates/index.html',
            template: 'src/index.html',
            title: '中国高校社会科学数据中心'
        }),
        new OpenBrowerPlugin({
            url: host
        })
    ],
    resolve: {
        alias: {
          '~': resolve(__dirname, 'src')
        },
        extensions: ['.js', '.vue', '.json', '.css', '.scss']
    },
    devServer: {
        host: '127.0.0.1',
        port: port,
        proxy: {
          '/api/v1': {
            target: 'http://127.0.0.1:8099',
            changeOrigin: true
          }
        },
        historyApiFallback: {
          index: url.parse(options.dev ? '/assets/' : publicPath).pathname
        },
    },
    devtool: options.dev ? '#eval-source-map' : '#source-map'
})