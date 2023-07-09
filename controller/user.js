const user = require("../src/models/user");
 async function handleUserSignup(req,res){
    const{username,emailId,password}= req.body;
    // console.log(req.body)
    await user.create({
        username,
        emailId,
        password,
    });
    // return res.render("");
    // res.send("sigup done")
    res.redirect("/");
}
// const showUsers = async(req,res)=>{
//     try {
//         const getAllusers = await user.find({});
//         res.send(getAllusers);

//     } catch (error) {
//         console.log(error);
//     }
// }

async function handleUserLogin(req,res){
    const{emailId,password}= req.body;
    const user = await user.findOne({emailId,password});
    if(!user)
        return res.render("Login",{
         error:"Invalid username or password",   
        });
        return res.redirect("/");
    }
module.exports = {
    handleUserSignup,
    handleUserLogin,
};