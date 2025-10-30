const express =require("express")
const router = express.Router()

router.get('/', (req,res)=>{
    res.send("This is a  collage home  page")
})

router.get('/main', (req,res)=>{
    res.send(`<h1>This is a  collage main page</h1>`)
})

router.get('/course/:slug', (req,res)=>{
    res.send(`<h1>fetch the collage description of ${req.params.slug}</h1>`)
})


module.exports = router

