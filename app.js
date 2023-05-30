
const express = require("express")
const bodyParser = require("body-parser")
var DetectLanguage = require('detectlanguage');
// const translate = require("google-translate-api")

const app = express()

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended: true}));



app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
    const detectlanguageApiKey = "<API Key>";
    
    var detectlanguage = new DetectLanguage(detectlanguageApiKey);
    var text = req.body.text;
    detectlanguage.detectCode(text).then(function(lang) {
    // // ------------------------------------------------------
    // translate(text, {from: 'en', to: 'fr'}).then(res => {
    //     console.log(resp.text);
    //     response.send("hey")
    // }).catch(err => {
    //     console.error(err);
    //     // res.send("Something bad happened: " + err);
    res.send("The text "+text+" is in "+lang+" language.");
    });

    


  });







app.listen("3000",function(){
    console.log("Server is running on port 3000");
})










