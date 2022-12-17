const UserModel =require("../model/user.model");
const ValidateRegister =require('../validation/Register');
const ValidateLogin = require('../validation/Login')
const jwt = require ("jsonwebtoken")
const bcrypt = require ("bcryptjs");
const { exists } = require("../model/user.model");


const Login = async(req,res)=>{
    const {error,isValid} = ValidateLogin(req.body)
  try {
    if(!isValid){
        res.status(404).json(error)
    }else{
  UserModel.findOne({email:req.body.email})
  .then(user=>{
    if(!user){
        error.email = "not found user"
    res.status(404).json(error)
    }else {
        bcrypt.compare(req.body.password ,user.password)
        .then(isMatch =>{
            if(!isMatch){
           error.password = "incorrect password"
           res.status(404).json(error)
            }else{ 
        var token = jwt.sign({
          id :user._id,
          name:user.name,
          email:user.email,
          role:user.role
            },process.env.PRIVETE_KEY ,{expiresIn : '1h'});    
          res.status(200).json({
            message:'success',
            role :user.role,
            token,
            
          })
          // res.cookie("Authorization", token, {
          //   expires: new Date(exp),
          //   httpOnly: true,
          //   sameSite: "lax",
          //   secure: process.env.NODE_ENV === "production",
          // });
            }
        })
    }
  })
  }
  }catch(error){
    res.status(404).json(error.message)
  }
  }
  
  const Register  = async(req,res)=>{
    const {error,isValid} = ValidateRegister(req.body)
    try {
      if (!isValid){
        res.status(404).json(error)
      }
      else {
        UserModel.findOne({email:req.body.email})
        .then(async(exist) =>{
            if(exist){
                error.email = "user exist";
                res.status(404).json(error)
            }else {
                const hash = bcrypt.hashSync(req.body.password , 10) // hashed password
                req.body.password = hash
                req.body.role = "USER"
                await UserModel.create(req.body)
                res.status(200).json({message : "success"})
            }
        })
      }
    }catch(error){
        res.status(404).json(error.message)
    }
    }



module.exports={
    Login,
    Register,
    

}