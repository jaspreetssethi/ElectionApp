define(['marionette', 'tpl!templates/voterRegister', 'kendo/kendo.maskedtextbox'], function (Marionette, tplVoterRegister) {
    var voterRegister = Marionette.ItemView.extend({
        template: tplVoterRegister,
        bindings: {
            'input.firstName': 'first_name',
            'input.firstName': 'last_name',
            'input.aadharNumber': 'aadharNumber',
            'input.enrollmentId': 'enrollmentId'
        },
        ui: {
            EnrollmentId: 'input.enrollmentId',
            AadharNumber: 'input.aadharNumber'
        },
        triggers: {
            'click.voterSignUp': 'signup'
        },
        onRender: function () {
            this.stickit();
            this.ui.EnrollmentId.kendoMaskedTextBox({
                mask: "0000/00000/00000",
                clearPromptChar: true
            });
            this.ui.AadharNumber.kendoMaskedTextBox({
                mask: "0000 0000 0000",
                clearPromptChar: true
            });
        }
    });

    return voterRegister;
});