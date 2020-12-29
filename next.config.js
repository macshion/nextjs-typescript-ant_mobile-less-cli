/* eslint-disable */
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './static/style/antd-custom.less'), 'utf8')
)

module.exports = withLess(withCss({
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
          const antStyles = /antd-mobile\/.*?\/style.*?/
          const origExternals = [...config.externals]
        //   console.log('config.externals: ',JSON.stringify(config.externals));
          config.externals = [
            (context, request, callback) => {
              if (request.match(antStyles)) return callback()
              if (typeof origExternals[0] === 'function') {
                origExternals[0](context, request, callback)
              } else {
                callback()
              }
            },
            ...(typeof origExternals[0] === 'function' ? [] : origExternals),
          ]
          config.module.rules.unshift({
            test: antStyles,
            use: 'null-loader',
          })
        }
        return config
    }
  }))
