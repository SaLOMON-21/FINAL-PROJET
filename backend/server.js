const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 3000;

//connxion a DB
connectDB() ; 

const app = express();
/*app.get("/post", (req, res) => {
    res.json({ message: "voici les données"});
});*/


// middlware
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

app.use("/post", require("./routes/post.routes"));

// pour lancer le server
app.listen(port, () => console.log ("le serveur est en service " 
+ port));   


