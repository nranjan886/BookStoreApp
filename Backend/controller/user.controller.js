import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import User from "../model/user.model.js";

export const handlesignup =async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    console.log(fullName,email,password)
    const user =await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const hashPassword = await bcrypt.hash(password,10)
    const creatUser = new User({
      fullName,
      email,
      password: hashPassword,
    });
    await creatUser.save();
    res.status(201).json({ msg: "User created" , user:{
      _id:creatUser._id,
      fullName:creatUser.fullName,
      email:creatUser.email
    }});
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const handlelogin= async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        console.log(user)
        const isMatch = await bcrypt.compare(password, user.password);
        if(!user || !isMatch){
            return res.status(400).json({msg:"Invalid email or passowrd"});
        }else{
            res.status(200).json({msg:"login successful", user:{
                _id:user._id,
                fullName:user.fullName,
                email:user.email
            }})
            console.log("hello")

        }
    }
    catch(error){
        console.log("Error: " + error.message);
        res.status(500).json({ msg: "Internal Server Error" });    
    }
}
