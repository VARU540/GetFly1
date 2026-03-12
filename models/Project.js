
const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Project = sequelize.define('Project',{
id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
name:{type:DataTypes.STRING},
description:{type:DataTypes.TEXT},
start_date:{type:DataTypes.DATE},
end_date:{type:DataTypes.DATE},
status:{type:DataTypes.ENUM('planned','active','completed')},
created_by:{type:DataTypes.INTEGER}
},{timestamps:true})

module.exports = Project
