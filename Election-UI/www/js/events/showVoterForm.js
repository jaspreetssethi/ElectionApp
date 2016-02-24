define(['app'], function (App) {
    App.commands.setHandler('voterForm', function () {
        require(['views/voterRegister', 'models/voter'], function (VoterRegister, VoterModel) {
            var voter = new VoterModel(),
                voterRegistrationView;
            App.Main.show(voterRegistrationView = new VoterRegister({
                model: voter
            }));
            voterRegistrationView.listenTo(voterRegistrationView, 'signup', function () {
                alert('Hi ' + voter.get('name') + ', we dont save the voter model yet... but working on it. :D');
                //the voter model has all the details after the form was filled out. Should be able to do voter.save() once backend has the post implemented.
            });
        });
    });
});