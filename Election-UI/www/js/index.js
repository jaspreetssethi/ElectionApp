require.config({
    baseUrl: 'js',
    paths: {}
});

require([/*what you want*/], function (/* what you get */) {
    alert('Hello World');
    //runs when you get what you wanted
});