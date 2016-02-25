define(['backbone', 'app'], function(Backbone, App){
    
        App.commands.setHandler('voterConfirm', function () {

    require(['views/voterRegister', 'models/voter'], function (VoterRegister, VoterModel) {
            var voter = new VoterModel(),
                voterRegistrationView;
            App.Main.show(voterRegistrationView = new VoterRegister({
                model: voter
            }));
        
    Backbone.ajax({
        dataType: "text",
        url: '/citizen',
        data:{'UIDI': voter.get('UIDI')},
        success: function(val){
        console.log(collection);
    }
    });
});
        });
});
