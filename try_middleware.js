var express=require('express');
var app=express();

app.listen(3000,function(){
    console.log("LISTENING ON PORT 3000");
});

/*app.use(function(req,res,next){
    console.log("function 2");
    next();
});

app.use(function(req,res,next){
    console.log("function 3");
    next();
});*/

var func1=function(req,res,next){
    console.log("FUNC 1");
    next();
}

var func2=function(req,res,next){
    console.log("FUNCT 2");
    next();
}

app.use(func1);

app.use(func2);

app.get('/',function(req,res){
    console.log("function 1");
    res.status(200).send("CALLED FUNCTION 1");
    //next();
});



app.get('/json',(req,res)=>{
    console.log("GET THE JSON");
    //console.log(req);
    res.status(200).json({
        "jsonData" : true
    });
});






