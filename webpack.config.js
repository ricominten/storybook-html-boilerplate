const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require("glob");

module.exports = (env, argv) => ({
    entry: {
        main: glob.sync("./src/components/**/!(*.stories).js"),
        styles: glob.sync("./src/components/**/!(*.theme).scss"),
        theme: glob.sync("./src/components/**/*.theme.scss"),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Extract css into it's own file
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    resolve: {
        extensions: ['.js', '.scss'],
    },
});