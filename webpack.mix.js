const  mix  = require("laravel-mix");

mix.autoload({ 
    'jquery': ['$', 'window.jQuery', 'jQuery']
});

mix.setPublicPath("dist");

/* mix.options({
    processCssUrls: false,
}); */

mix.disableNotifications();

mix.copy("src", "dist", false);
mix.copy("resources/images", "dist/images", false);

mix
  .sass("resources/styles/app.scss", "dist/css")
  .js("resources/scripts/app.js", "dist/scripts");
