define(['backbone', 'config'], function(Backbone, Config){
    var voterModel = Backbone.Model.extend({
       defaults:{
           first_name: 'First Name',
           last_name: 'Last Name',
           aadharNumber: '0000',
           enrollment_id1: '0000',
           enrollment_id2: '0000',
           enrollment_id3: '0000'
       } 
    });
    var candidateModelCollection = Backbone.Collection.extend({
        model: candidateModel ,
        url: Config.path + '/voterConfirm' 
    });

    return candidateModelCollection;
});