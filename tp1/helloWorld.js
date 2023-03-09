const express = require("express");
const app = express();
const port = 3000;

app.get("/toto", (req, res, next)=>{
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});