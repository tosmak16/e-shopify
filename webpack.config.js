const path = require('path');
const webpack = require('webpack');
// Allows us to merge different webpack configs
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const pxToRem = require('postcss-pxtorem');

// Eases creating html files to serve bundles
const HtmlWebPackPlugin = require('html-webpack-plugin');
// Removes build folders before building
const CleanWebpackPlugin = require('clean-webpack-plugin');

// extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dotenv = require('dotenv');

dotenv.config();

const { NODE_ENV } = process.env;
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'client/src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

const isDevelopmentMode = NODE_ENV !== 'production';

const common = {
  context: path.resolve(APP_PATH),
  entry: path.resolve(APP_PATH, 'index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: '[name].[hash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'source-map-loader',
          {
            loader: 'babel-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopmentMode
            }
          },
          'css-loader'
        ]
      },

      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              sourceMap: isDevelopmentMode,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopmentMode,
              plugins() {
                return [autoprefixer('last 2 version'), pxToRem()];
              }
            }
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
            options: {
              sourceMap: isDevelopmentMode
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin(
      Object.assign(
        {},
        {
          template: './index.html'
        }
      )
    ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        api_url: JSON.stringify(process.env.api_url),
        stripe_publish_key: JSON.stringify(process.env.STRIP_PUBLIC_KEY),
        FACEBOOK_APP_ID: JSON.stringify(process.env.FACEBOOK_APP_ID)
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
      variables: path.resolve(__dirname, 'client/src/stylesheets/_variables.scss')
    }
  }
};

const development = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 4000,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};

const production = {
  mode: 'production',
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};

if (isDevelopmentMode) {
  module.exports = merge.smart(common, development);
}

if (!isDevelopmentMode) {
  module.exports = merge.smart(common, production);
}
