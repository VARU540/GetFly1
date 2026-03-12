
const router = require('express').Router()
const ctrl = require('../controllers/projectController')
const auth = require('../middleware/auth')

router.post('/',auth,ctrl.createProject)
router.get('/',auth,ctrl.getProjects)
router.get('/:id',auth,ctrl.getProject)
router.put('/:id',auth,ctrl.updateProject)
router.delete('/:id',auth,ctrl.deleteProject)

module.exports = router
