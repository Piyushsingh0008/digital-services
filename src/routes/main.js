const express = require('express');
const Detail = require("../models/detail");
const contact = require('../models/contact');
const { create } = require('hbs');
const router = require('./user');
const routes = express.Router();

routes.get("/",  (req,res)=>{
    res.render("index.hbs")
});


routes.get("/gellery",(req,res)=>{
    res.render("gellery.hbs")
});

routes.get("/about",(req,res)=>{
    res.render("about.hbs")
});

routes.post("/process-contact-form", async(req,res)=>{
    try {
        const data = await contact.create(req.body)
        res.redirect("/")
        
    } catch (error) {
        console.log("error in contact us")
        res.redirect("/")   
    }
});


router.get("/Login",(req,res)=>{
return res.render("Login");
});


module.exports = routes;