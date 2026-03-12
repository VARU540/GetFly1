
const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const DPR = sequelize.define('DPR',{
id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
project_id:{type:DataTypes.INTEGER},
user_id:{type:DataTypes.INTEGER},
date:{type:DataTypes.DATE},
work_description:{type:DataTypes.TEXT},
weather:{type:DataTypes.STRING},
worker_count:{type:DataTypes.INTEGER}
},{timestamps:true})

module.exports = DPR
