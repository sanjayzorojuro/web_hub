const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const blog = require('./routes/blog')
const collage = require('./routes/collage')




app.use(express.static((path.join(__dirname, 'public'))));
app.use('/blog',blog)
app.use('/collage',collage)

// Handle POST request
app.post('/', (req, res) => {
  console.log('Hey, it’s a POST request');
  res.send('nikal mc!');
});


// Its a put request used to update the page or a server.
app.put('/', (req, res) => {
  console.log('Hey, it’s a PuT request');
  res.send('Hello from Put!');
});


//sending a  
app.get('/hello', (req, res) => {
    res.sendFile("templates/hello.html", { root: __dirname })
})


//  accessing elemenst through api ie json format.
app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 4, d: 54, name: "nishu" })
})



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// routes folder is used to 