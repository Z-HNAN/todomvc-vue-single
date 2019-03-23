const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development', 
  entry: './src/app.js', // 当前的入口文件
  output: {
    filename: 'bundle[hash:8].js', // 在发布包的时候真是可见的
    path: path.resolve(__dirname, 'dist') // 这里的path需要一个绝对路径
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true // 开启hash戳 防止缓存 在开发的时候缓存中的hash
    }),
    // vueloade
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '/css/[name].css'
    })
  ],

  module: {
    rules: [{
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top'
            }
          },
          // MiniCssExtractPlugin.loader,   // 生成css文件link进来
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192, // 8 * 1024  8kb图片
            outputPath: '/img/', // 存放图片的路径，进行分类
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
           presets: ['@babel/preset-env']// 处理es6
           // plugins: [require('@babel/plugin-transform-runtime')]
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }

    ]
  }
}
