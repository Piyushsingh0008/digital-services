const express = require('express')
const hbs = require("hbs");
const mongoose = require("mongoose")
const app = express();
const bodyParser = require("body-parser");
const userRoute = require("./src/routes/user")

// mongodb connection
mongoose.connect("mongodb+srv://wwwpiyush7672831808:piyush@cluster0.j4nv3nu.mongodb.net/")
.then(()=>{
    console.log("connected..")
}).catch(err=>{
    console.log("error connecting,.....",err)
});


//static
app.use('static',express.static("public"))
app.use(express.json());
app.use(express.static(__dirname + '/public'));
hbs.registerPartials("views/partials")
app.use(bodyParser.urlencoded({
    extended:true
}))


const slider = require('./src/routes/slider')
app.use(slider)
app.use(require('./src/routes/main'))
app.use("/user",userRoute);

app.listen(3000,()=>{
    console.log("server is running on port 3000....")
});

//import all route
// db connection
// ceate server 