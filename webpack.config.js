const { DefinePlugin } = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = env => ({
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /\.spec\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      },
      {
        test: /\.spec\.ts$/,
        use: [
          {
            loader: 'webpack-espower-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          env && env.production
            ? MiniCssExtractPlugin.loader
            : 'vue-style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          env && env.production
            ? MiniCssExtractPlugin.loader
            : 'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue.jsとTypeScriptのサンプル4',
      template: './index.html',
      chunks: ['vendor', 'index'],
      filename: 'index.html',
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].style.css',
    }),
    new DefinePlugin({
      'process.env.NODE_ENV':
        env && env.production ? '"production"' : '"development"',
    }),
  ],
})
