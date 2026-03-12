
const DPR = require('../models/DPR')

exports.createDPR = async(req,res)=>{
const dpr = await DPR.create({
...req.body,
project_id:req.params.id
})
res.status(201).json(dpr)
}

exports.getDPRs = async(req,res)=>{
const dprs = await DPR.findAll({
where:{project_id:req.params.id}
})
res.json(dprs)
}
