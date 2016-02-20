define(['marionette', 'tpl!templates/welcome'], function(Marionette, tplWelcome){
    var WelcomeView = Marionette.ItemView.extend({
        template: tplWelcome
    });
    
    return WelcomeView;
});