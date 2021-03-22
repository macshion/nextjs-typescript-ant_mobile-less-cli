/* eslint-disable */
const withPlugins = require('next-compose-plugins')
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const ENV = require('./config/env')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './style/antd-custom.less'), 'utf8')
)
const BUILD_ENV = process.env.BUILD_ENV
const config = ENV[BUILD_ENV] || {}

module.exports = withPlugins(
    [
        [
            withLess,
            {
                lessLoaderOptions: {
                    javascriptEnabled: true,
                    modifyVars: themeVariables
                }
            }
        ],
        withCss
    ],
    {
        env: { ...config },
        assetPrefix: BUILD_ENV === 'local' ? '' : config.cdnUrl,
        reactStrictMode: true,
        trailingSlash: true,
        exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
            return {
                '/': { page: '/' },
            }
        },
        images: {
            domains: ['cloud.example.com']
        },
        webpack: (config, { isServer }) => {
            if (isServer) {
                const antMobileStyles = /antd-mobile\/.*?\/style.*?/
                const antStyles = /antd\/.*?\/style.*?/
                const origExternals = [...config.externals]
                config.externals = [
                    (context, request, callback) => {
                        if (request.match(antMobileStyles) || request.match(antStyles)) {
                            return callback()
                        }
                        if (typeof origExternals[0] === 'function') {
                            origExternals[0](context, request, callback)
                        } else {
                            callback()
                        }
                    },
                    ...(typeof origExternals[0] === 'function' ? [] : origExternals)
                ]
                config.module.rules.unshift({
                    test: antMobileStyles,
                    use: 'null-loader'
                })
                config.module.rules.unshift({
                    test: antStyles,
                    use: 'null-loader'
                })
            }
            return config
        }
    }
)
