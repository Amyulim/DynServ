const express = require("express");
//let num = 5;
var app = express();

/*========= what are the differences between const, let, and var ========= 
const : never can change 
let : that variable name never be used again, use only once   
==========================================================================*/

const port = process.env.PORT || 3000;

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get("/awesome", function(req, resp){
    resp.end("YOU ARE AWESOME");
});

app.get("/blahblahblah", function(req, resp){
    resp.end("yeah");
});

var names = [];

/* '/:the_name' = variable*/
app.get("/name/:the_name", function(req,resp){
    var the_name = req.params.the_name;
    
    names.push(the_name);
    resp.send(names);
    
});

/* err = error */
app.listen(port, function(err){
   if(err){
       console.log("something is wrong:"+err);
       return false;
   }
    
   console.log("PRT IS READY FOR H@X!")
   
});


