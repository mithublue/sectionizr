var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'dist/';
elixir.config.publicPath = 'dist/';
elixir.config.css.outputFolder = './';

elixir(function (mix) {
    mix.less(['demo.less'],'dist/css/demo.css');
});