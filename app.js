require("dotenv").config();
const   express = require("express"),
        app     = express(),
        mongoose= require("mongoose");
        

mongoose.connect(process.env.DATABASEURL,{useNewUrlParser:true,useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);  
app.set("view engine", "ejs");
app.use(express.static("./Public"));
app.use(express.urlencoded({ extended: true }));

const IndexRoute= require("./routes/index");
app.use(IndexRoute);
// const itemOne = Todo({item: "book"}).save(function(err){
//     if(err) throw err;
//     console.log("item saved");
// })

app.listen(3000,()=>{
    console.log("todo app connected")
});
