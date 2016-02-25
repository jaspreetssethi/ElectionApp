define(['marionette', 'tpl!templates/voterConfirm'], function(Marionette, tplVoterConfirm){
    var voterConfirm = Marionette.ItemView.extend({
        template: tplVoterConfirm
    });
    
    return voterConfirm;
});