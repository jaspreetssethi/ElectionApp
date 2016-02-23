define(['app'], function (App) {
    App.commands.setHandler('voterForm', function () {
        require(['views/voterRegister'], function (VoterRegister) {
            App.Main.show(new VoterRegister({

            }));
        });
    });
});