/*server backend*/
var express = require('express'); //get express server constructor
var bodyParser = require('body-parser');
var tingodb = require('tingodb');

var server = express();
var DB = tingodb();
var appDB = new DB.Db('.', {});

var usersDBCollection = appDB.collection("usersDB");

server.use(bodyParser.urlencoded({
    extended: true
}));

server.post('/createUser', function(req, res){
    var userName = req.body.email;
    var pass = req.body.password;
    
    usersDBCollection.insert({
        user: userName,
        pass: pass
    });
    
    res.send('user created');
});

server.post('/basic', function(request, response){
    console.log('You sent me the name: ' + request.body.email + '.');
    console.log('You send me the password: ' + request.body.password + '.');
    
    usersDBCollection.findOne({
        user: request.body.email,
        pass: request.body.password
    }, function(err, result){
        if(result){
            response.send('password was correct!');
        } else {
            response.send('password was not correct!');
        }
        
    });
});

server.listen(9000, function () {
  console.log('Ready');
});