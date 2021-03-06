/**************************HOSTING THE GEEKTRUST WEBAPP********************************/
app.get('/uikit',(req,res)=>{
    console.log("LOADING uikit webapp");
    //console.log(path.join(__dirname,'uikit/index.html'));
    //res.status(200).sendfile(path.join(__dirname,'uikit/index.html'));
    res.status(200).sendfile(path.join(__dirname,'uikit','index.html'));
});

app.get('/uikit/css/dashboard.css',(req,res)=>{
    console.log("LOADED uikit CSS")
    res.status(200).sendfile(path.join(__dirname,'uikit/css/dashboard.css'));
});

app.get('/uikit/js/dashboard.js',(req,res)=>{
    console.log("LOADED uikit JS");
    res.status(200).sendfile(path.join(__dirname,'uikit/js/dashboard.js'));
});
/**************************************************************************************/