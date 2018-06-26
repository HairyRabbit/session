import path from 'path'
import {
  EnvironmentPlugin,
  ContextReplacementPlugin
} from 'webpack'

export default ['index'].map(input => {
  return {
    mode: process.env.NODE_ENV,
    target: 'web',
    entry: path.resolve(`src/${input}.js`),
    output: {
      path: path.resolve('.'),
      filename: `${input}.js`,
      libraryTarget: 'umd'
    },
    module: {
      rules: [{
        test: /.js$/,
        use: 'babel-loader'
      }]
    },
    plugins: [
      new EnvironmentPlugin({
        NODE_ENV: false,
        DEBUG: false
      })
    ],
    externals: [

    ]
  }
})
