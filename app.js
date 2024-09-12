const express = require("express")
const app = express()
require('./DBConnection').connectionDB();
const port = 2468
require("./models/index")
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});