var express=require('express');
var app=express();
var path=require('path');

app.set('port',3000);

/*app.use('/',(req,res,next)=>{
    //console.log("ALL");
    console.log(req.method,req.url);
    next();
});*/

app.use('/css',(req,res,next)=>{
    console.log("\nREQUESTED CSS");
    console.log(req.method,req.url);
    next();
});

app.use(express.static(path.join(__dirname,'uikit')));  

app.use(function(req,res,next){
    console.log("SECOND");
    console.log(req.method,req.url);
    next();
});

var server = app.listen(app.get('port'),()=>{                 //app.listen() is an asynchronous function
    var port=server.address().port;
    //console.log("LISTENING ON PORT " + app.get('port'));
    console.log("LISTENING ON PORT " + port);
});

/*app.get('/',(req,res)=>{
    console.log("GET THE HOMEPAGE");
    res.status(200).send("<h1 style='position:relative; float:center;'>GOT YOUR REQUEST</h1>");
});*/

//console.log("AFTER app.listen()");

app.get('/json',(req,res)=>{
    console.log("GET THE JSON");
    //console.log(req);
    res.status(200).json({
        "jsonData" : true
    });
});

app.get('/file',(req,res)=>{
    console.log("FILE NAME:");
    //console.log(req);
    console.log(path.join(__dirname,'sayHello.html'));
    res.status(200).sendfile(path.join(__dirname,'sayHello.html'));
    //console.log(path.join('./','sayHello.html'));
    //res.status(200).sendfile(path.join('./','sayHello.html'));
});
