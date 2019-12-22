const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
})

const cssPlugin = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
})

const config = mode => {
    const isDevelopMode = mode === 'development'
    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/build'),
            filename: 'index.bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: isDevelopMode
                                        ? '[path][name]__[local]--[hash:base64:7]'
                                        : '[name]__[local]--[hash:base64:7]',
                                },
                                importLoaders: 2,
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,

                                // importLoaders: 1,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [htmlPlugin, cssPlugin],
    }
}

module.exports = (env, argv) => {
    const { mode } = argv
    return config(mode)
}
