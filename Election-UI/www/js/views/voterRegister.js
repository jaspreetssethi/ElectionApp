define(['marionette', 'tpl!templates/voterRegister'], function(Marionette, tplVoterRegister){
    var voterRegister = Marionette.ItemView.extend({
        template: tplVoterRegister,
        bindings: {
            'input.name': 'name',
            'input.aadharNb': 'aadharNb',
            'input.dob': 'dateOfBirth',
            'input[name="Gender"]': 'gender'
        },
        triggers: {
            'click .voterSignUp': 'signup'
        },
        onRender: function () {
            this.stickit();
        }
    });
    
    return voterRegister;
});