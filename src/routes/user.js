const  express = require("express")
const {handleUserSignup,handleUserLogin}= require("../../controller/user");
const router = express.Router();

// router.get("/",(req,res)=>{
//     res.send("signup sucessfully")
// });
router.get("/signup",(req,res)=>{
     res.render("signup.hbs");
});

router.get("/Login",(req,res)=>{
    res.render("Login.hbs");
});
// router.get('/users',showUsers)
router.post('/register',handleUserSignup),
router.post('/Login',handleUserLogin),

module.exports = router;