require.config({
    baseUrl: 'js',
    paths: {
        backbone: 'lib/backbone/backbone',
        "backbone.babysitter": 'lib/backbone.babysitter/lib/backbone.babysitter',
        marionette: 'lib/backbone.marionette/lib/core/backbone.marionette',
        "backbone.wreqr": 'lib/backbone.wreqr/lib/backbone.wreqr',
        jquery: 'lib/jquery/dist/jquery',
        tpl: 'lib/require-tpl/tpl',
        text: 'lib/text/text',
        underscore: 'lib/underscore/underscore'        
    }
});

require(['app'], function (App) {
    App.start();
});