const PATH = require('path');

const webpack = require("webpack");

const ROOT = '../../../';

const APP_FOLDER = PATH.resolve(__dirname, ROOT, 'client/');
const APP_ENTRY_FILE = PATH.resolve(__dirname, ROOT, 'client/', 'app.js');

const BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'public/js/');
const PUBLIC_PATH = '/js/';

const BUILD_FILE = 'app.js';

const ESLINT_CONFIG_FILE = PATH.resolve(__dirname, ROOT, 'tools/build/config/eslint-config.json');
var PROD = JSON.parse(process.env.PROD_ENV || '0');
var webpackConfig = {
  entry: {
    app: APP_ENTRY_FILE
  },
  output: {
    path: BUILD_FOLDER,
    publicPath: PUBLIC_PATH,
    // filename: BUILD_FILE,
    filename: PROD ? 'app.min.js' : 'app.js'
  },
  devtool: 'cheap-module-source-map',
  // devtool: 'inline-source-map',
  debug: true,    
  // bail: true,
  eslint: {
      configFile: ESLINT_CONFIG_FILE
  },
  module: {
    // preLoaders: [
    //     {
    //         test: /\.js$/,
    //         include: [
    //             APP_FOLDER
    //         ],
    //         loader: 'eslint-loader'
    //     }
    // ],
    loaders: [
      {
        test: /\.js$/,
        // include: [
        //   APP_FOLDER
        // ],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
          compact: false,
          cacheDirectory: true
        },
      }
    ]        
  },
  externals: {
    // 'axios': 'axios',
    // 'react': 'React',
    // 'react-router': 'ReactRouter',
    'history': 'History',
    // 'react-dom': 'ReactDOM'
  },
  // plugins: [
  //   new webpack.NoErrorsPlugin(),
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   })
  // ],
  plugins: PROD ? [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [
    new webpack.NoErrorsPlugin(),
  ]
};

module.exports = webpackConfig;