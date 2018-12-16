import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const resolve = (...parts) => path.join(__dirname, ...parts)

export default {
  entry: [
    resolve('src', 'main.js'),
    resolve('src', 'main.scss')
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ticket Evolution Map',
      template: resolve('src', 'index.html'),
      meta: {
        viewport: 'width=device-width, initial-scale=1'
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              ['@babel/preset-env', {
                targets: 'last 2 versions'
              }],
              '@babel/preset-react'
            ],
            plugins: [
              'babel-plugin-react-require',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
}