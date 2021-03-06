var express=require('express');
var app=express();
var path=require('path');

app.set('port',3000);

var server = app.listen(app.get('port'),()=>{                 //app.listen() is an asynchronous function
    var port=server.address().port;
    //console.log("LISTENING ON PORT " + app.get('port'));
    console.log("LISTENING ON PORT " + port);
});

