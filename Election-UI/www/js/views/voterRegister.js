define(['marionette', 'tpl!templates/voterRegister'], function(Marionette, tplVoterRegister){
    var voterRegister = Marionette.ItemView.extend({
        template: tplVoterRegister,
        className: 'form-horizontal'
    });
    
    return voterRegister;
});