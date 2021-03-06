const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .copy('node_modules/materialize-css/bin/materialize.js', 'public/js')
   .copy('resources/assets/img/banners', 'public/img/banners')
   .copy('resources/assets/img/portfolio/letting-management-system', 'public/img/portfolio/letting-management-system')
   .copy('resources/assets/img/portfolio/microsite-management-system', 'public/img/portfolio/microsite-management-system')
   .copy('resources/assets/img/portfolio/stock-check', 'public/img/portfolio/stock-check')
   .copy('resources/assets/favicons', 'public/favicons');
