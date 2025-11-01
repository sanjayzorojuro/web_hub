const express = require("express")
const path = require("path")
const port = 3000
const app = express()

app.set('views', path.join(__dirname, "views"))

app.get('/', (req, res) => {
    let dataname = "NIKE"
    let searchtext = "Discount From Nike"  //now we want to add this values which is comming form the database and send the data to the sendfile().
    let arr = ['Buynow', 'Hurry', 'Offers end soon']
    res.render("index", { dataname: dataname, searchtext: searchtext, arr })
})


//ejs is a templates like jinja.

//now in this we want the data form the database to be shown in the index.html file according the slug for now the slug is hari so when the user enters the slug hari we want ot load the data of the hari to the index.html page annd when he changes the slug we want to fetch the new data according to the slug and then again load that content to the index.html page. so this  can be done using EJS template engine.

app.set('view engine', 'ejs')  //first we need to set the ejs

app.get('/:slug', (req, res) => {
    let dataname = "hari"
    let searchtext = "serach hari"  //now we want to add this values which is comming form the database and send the data to the sendfile().
    res.render("index", { dataname: dataname, searchtext: searchtext })
})   //passing a object 


app.listen(port, () => {
    console.log(`server running at http://localport:${port}`)
})