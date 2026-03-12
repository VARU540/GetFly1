
const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const User = sequelize.define('User',{
id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
name:{type:DataTypes.STRING},
email:{type:DataTypes.STRING,unique:true},
password_hash:{type:DataTypes.STRING},
role:{type:DataTypes.ENUM('admin','manager','worker')}
},{timestamps:true})

module.exports = User
