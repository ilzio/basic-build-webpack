// plugins imported
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// needed to work with directories
var path = require('path');

// main configuration object.
module.exports = {
    // Path to your entry point
    entry: "./src/index.js",
    // output directory and filename 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./index.js"
    },

    // tells webpack how to transform files 

    module: {
        rules: [
            // babel transpiler for ES6 Javascript
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
            // .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,
                // Set loaders to transform files. loaders in the "use array" will be applied from last to first / bottom to top!!
                use: [
                    {
                        // After all CSS loaders have finished working we use this plugin to get all transformed CSS and extracts it into separate (config in plugins array)
                        // single bundled file
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    {
                        // This loader resolves url() and @imports inside CSS
                        loader: "css-loader",
                    },
                    {
                        // Then we apply postCSS fixes like autoprefixer and minifying
                        loader: "postcss-loader"
                    },
                    {
                        // First we transform SASS to standard CSS
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },
            // images
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                // images will be saved in this directory
                options: {
                    outputPath: 'images'
                }
            },
            // eventual fonts with output directory
            {
                // Apply rule for fonts files
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        // Using file-loader too
                        loader: "file-loader",
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }

        ]
    },
    // plugins are needed to handle things that loaders can't such as extract transformed css into separate files
    plugins: [
    // activate plugin
        new MiniCssExtractPlugin({
            filename: "style.css"
        })

    ],

    mode: 'development',

}