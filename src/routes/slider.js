const express = require('express');
const router = express.Router();
const Slider = require('../models/slider')

router.post("/Slider",(req,res)=>{
    const {title,substitle,imageUrl} = req.body;
        const Sliderobj = new Slider ({
            title,
            substitle,
            imageUrl
        }) 
         Sliderobj.save();
         res.send("data sended");
});

module.exports = router;
