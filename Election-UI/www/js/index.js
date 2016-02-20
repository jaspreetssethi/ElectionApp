require.config({
    baseUrl: 'js',
    paths: {
        backbone: 'lib/backbone/backbone',
        "backbone.babysitter": 'lib/backbone.babysitter/lib/backbone.babysitter',
        marionette: 'lib/backbone.marionette/lib/core/backbone.marionette',
        "backbone.wreqr": 'lib/backbone.wreqr/lib/backbone.wreqr',
        jquery: 'lib/jquery/dist/jquery',
        tpl: 'lib/requirejs-tpl/tpl',
        text: 'lib/text/text',
        underscore: 'lib/underscore/underscore',   
        bootstrap: 'lib/bootstrap/dist/js/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require(['app', 'views/welcome', 'backbone', 'bootstrap'], function (App, WelcomeView, Backbone) {
    App.start();
    
    App.Main.show(new WelcomeView({
        model: new Backbone.Model({
            isAdmin: true,
            name: 'Jaspreet'
        })
    }));
});