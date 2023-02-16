const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const e = require("express");
const https = require("https")

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "signup.html");

});

app.post("/",function(req,res){

    const firstName = req.body.fNmae;
    const lastName = req.body.lNmae;

    const email = req.body.email;

    console.log(firstName ,lastName, email);

    const data={

        members:[
            {
            email_address:emial,
            status:"subscribed",
            merge_fields:{
                FNAME:firstName,
                LNAME:lastName
            }


            }

        ]
    };

    const jsonData = JSON.stringify(data);
    const url = "https://us8.api.mailchimp.com/3.0/lists/unique id"

    const options={
        method:"POST",
        auth:"manmohan:cf4fc2614e28886884147ebcfb5d7ff9-us8"


    }

    const request = https.request(url,options,function(error,rsponse,body){
        if(error){
            res.send("some error occur")
        }else{
       if( response.statusCode==200){
        res.sendFile(__dirname+ "/success.html");
       }else{
        res.sendFile(__dirname + "/failure.html");
       }
    }

        response.on("data",function(data){
            console.log(JSON.parse(data));
        })

    });
    request.write(jsonData);
    request.end();





    https.request(url,Option,function(response){

    });



});

app.post("/failure",function(req,res){
    res.redirect("/")

});

app.listen(8080,function(){
    console.log("Server is running");
})

//Api Key
//cf4fc2614e28886884147ebcfb5d7ff9-us8
//Unique Id