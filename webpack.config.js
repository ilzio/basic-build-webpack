// plugins imported
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');




// needed to work with directories
var path = require('path');

// main configuration object.
module.exports = {

    // Path to your entry point  [using babel polyfill for async-await] 
    entry: ['babel-polyfill', './src/index.js'],

    // output directory and filename 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].js",

        // used within server script to make sure files are served correctly on http://localhost:3000 -> check!!
        publicPath: '',
    },

    
    
    // DEVELOPMENT TOOLS
    mode: 'development',

    // creates inline source map (which maps compiled code back to original source code for debugging purposes)
    devtool: 'inline-source-map',

    // tells webpack development server location of files to be served (default localhost:8080)
    devServer: {
        contentBase: './dist',
    },

    // LOADERS (tell webpack how to transform files )
    
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
    // PLUGINS: needed to handle things that loaders can't 
    plugins: [
       
        // dinamically creates index.html
        new HtmlWebpackPlugin({
            
            // hashes for caching purposes
            hash: true,
            // template file for generating html
            template: './src/index.html',
            // name of generated html
            filename: 'index.html',
            // variables passed to plugin
            title: 'This is title given by nothing',
            myPageHeader: 'Example of another variable',
        }),
        // extracts css to separate file
        new MiniCssExtractPlugin({
            filename: "styles/[name].css"
        }),
        // clears output.path directory, + unused assets after every successful rebuild.
        new CleanWebpackPlugin()

       

    ],



}