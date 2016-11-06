var gulp = require('gulp');
var elixir = require('laravel-elixir');
var argv = require('yargs').argv;

elixir.config.assetsPath = 'resources/assets';
elixir.config.publicPath = 'public';

elixir.config.css.autoprefixer = {
    enabled: true,
    options: {
        browsers: ['last 2 versions'],
        cascade: false
    }
};

elixir(function(mix) {

    var env = argv.e || argv.env || 'local';
    var port = argv.p || argv.port || 4000;

    mix.sass([
        'app.scss'
    ], 'public/css/app.css')
    .scripts([
        'script.js'
    ], 'public/js/app.js')
    .version([
        'css/app.css',
        'js/app.js'
    ])
    .browserSync({
        port: port,
        server: { baseDir: 'public' },
        proxy: null
    });
});
