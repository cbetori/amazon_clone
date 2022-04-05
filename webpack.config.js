const { ModuleFederationPlugin } = require('webpack').container
const { MFLiveReloadPlugin } = require('@module-federation/fmr')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const deps = require('./package.json').dependencies

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  entry: './src/index.js',
  mode,
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    chunkFilename: '[name].[id].js',
    // publicPath: prod ? 'http://localhost:3005/' : 'http://localhost:3005/',
  },
  devtool: prod ? 'hidden-source-map' : 'inline-source-map',
  resolve: {
    extensions: ['.js', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.(png|svg|ico|jpg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3005,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'amazon',
      filename: 'remoteEntry.js',
      exposes: {
        './Amazon': './src/App.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new MFLiveReloadPlugin({
      container: 'dashboard',
      port: 8080,
    }),
  ],
}
