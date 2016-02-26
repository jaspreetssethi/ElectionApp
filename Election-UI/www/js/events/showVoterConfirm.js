define(['backbone', 'app'], function(Backbone, App){
    
        App.commands.setHandler('voterConfirm', function () {

    require(['views/voterConfirm', 'models/voterConfirm'], function (VoterConfirmation, VoterConfirmModel) {
            var voter = new VoterConfirmModel(),
                voterConfirmationView;
            App.Main.show(voterConfirmationView = new VoterConfirmation({
                model: voterConfirm
            }));
        
        voterConfirmationView.listenTo(voterConfirmationView, 'confirm', function(){
           voter.save(); 
        });
        
//        
//    Backbone.ajax({
//        dataType: "text",
//        url: '/citizen',
//        data:{'UIDI': voter.get('UIDI')},
//        success: function(val){
//        console.log(collection);
//    }
//    });
});
        });
});
