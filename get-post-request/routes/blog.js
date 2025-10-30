const express =require("express")
const router = express.Router()

router.get('/', (req,res)=>{
    res.send("This is a  blog home  page")
})

router.get('/homes', (req,res)=>{
    res.send(`<h1>This is a  blog main page</h1>`)
})

router.get('/desc/:slug', (req,res)=>{
    res.send(`<h1>fetch the blog description of ${req.params.slug}</h1>`)
})


module.exports = router

