
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.register = async(req,res)=>{
try{
const {name,email,password,role} = req.body
const hash = await bcrypt.hash(password,10)

const user = await User.create({
name,email,password_hash:hash,role
})

res.status(201).json({message:'User created',userId:user.id})
}catch(err){
res.status(500).json({error:err.message})
}
}

exports.login = async(req,res)=>{
try{
const {email,password} = req.body
const user = await User.findOne({where:{email}})

if(!user) return res.status(404).json({message:"User not found"})

const valid = await bcrypt.compare(password,user.password_hash)
if(!valid) return res.status(401).json({message:"Invalid password"})

const token = jwt.sign({id:user.id,role:user.role},process.env.JWT_SECRET)

res.json({token,user})
}catch(err){
res.status(500).json({error:err.message})
}
}
