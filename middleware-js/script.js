const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const fs = require('fs')


// This is a in bulit kinda middleware where the req inside app.get is fecthed and then its comapred if the req is in  the public dirr if yes then it willl be executed.
app.use(express.static(path.join(__dirname,"public")))



//creating a middleware that handles the req from a app and the can be modified befer resloving or sending the response.  here next means next middleware.
//middleware 1
app.use((req, res, next) => {
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method} \n `)
    console.log(`${Date.now()} is a ${req.method}`)  //gets the time and the method which it used to request that is post or get. here Date.now sends the time in time stamps we need to convert the time.

    // res.send("middle ware 1")
    next()  // if we didnt use next the request will be hanging.
})

//middleware 2
app.use((req, res, next) => {
    console.log("logged2")

    next()
})
//there are five types to middleware use the documentation for more info.
//middle ware are used for login,cookies etc.


app.get('/', (req, res) => {
    res.send('hello')
})



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
