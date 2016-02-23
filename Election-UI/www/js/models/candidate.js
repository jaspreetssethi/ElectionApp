define(['backbone', 'config'], function(Backbone, Config){
    var candidateModel = Backbone.Model.extend({
       defaults:{
           first_name: 'First Name',
           last_name: 'Last Name',
           date_of_birth: '0000-00-00',
           constituency: 'Constituency',
           description: 'Description'
       } 
    });
    var candidateModelCollection = Backbone.Collection.extend({
        model: candidateModel ,
        url: Config.path + '/candidate'
    });

    return candidateModelCollection;
});