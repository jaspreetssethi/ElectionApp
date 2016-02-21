define(['marionette', 'tpl!templates/candidateList'], function(Marionette, tplCandidateList){
    var candidateListChild = Marionette.ItemView.extend({
        template: tplCandidateList
    });
    
    var candidateList = Marionette.CollectionView.extend({
        childView: candidateListChild
    });
    
    return candidateList;
});