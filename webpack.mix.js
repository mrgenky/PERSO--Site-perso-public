const mix = require('laravel-mix');
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'sass-loader',
                options: {
                    additionalData: `@import "resources/sass/_variables.scss";`,
                },
            },
        ],
    },
    resolve: {
        alias: {
            '@vue': path.join(__dirname, 'node_modules/vue/dist/vue.esm.js'),
            '@': path.join(__dirname, 'resources/js'),
        },
        extensions: ['.js', '.vue', '.json'],
        fallback: {
            fs: false,
            child_process: false,
        },
    },
});

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
