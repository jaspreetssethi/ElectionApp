define(['marionette', 'tpl!templates/vote'], function(Marionette, tplVote){
       var voteListChild: Marionette.ItemView.extend({
           template: tplVote,
           className: 'row-well'
       });
    
    var voteList: Marionette.CollectionView.extend({
        childView: voteListChild
    });
    
    return voteList;
});