const debug = process.env.NODE_ENV !== "production";
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    exportPathMap: function () {
        return {
            "/index": { page: "/" },
            "/about": { page: "/about" },
            "/document": { page: "/document" },
        }
    },
    // assetPrefix: !debug ? '/wtprojects/wtpg24/' : '',
    webpack: config => {
        config.module.rules.push({
            test: /\.(jpg|ico|png|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        context: '',
                        outputPath: 'static',
                        publicPath: '_next/static',
                        name: '[path][name].[hash].[ext]'
                    }
                }
            ]
        })

        return config
    }
})
