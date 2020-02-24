const path = require('path')
const MiniCssExtracPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports={
    entry:{
        buscador: path.resolve(__dirname, './src/js/index.js')
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'js/[name].js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader:MiniCssExtracPlugin.loader
                    },
                    'css-loader'
                ] 
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use:{
                    loader:'file-loader',
                
                options:{
                    name: '[name].[ext]',
                    outputPath: 'assets/'
                    }
                }
                    
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname,'./dist'),
        open: true,
        port: 3000,
        hot:true
    },
    plugins:[
        new MiniCssExtracPlugin({
            filename:'css/[name].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Buscador',
            template: path.resolve(__dirname, 'index.html')
        })
    ]
    
    
}