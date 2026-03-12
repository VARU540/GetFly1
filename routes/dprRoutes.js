
const router = require('express').Router()
const ctrl = require('../controllers/dprController')
const auth = require('../middleware/auth')

router.post('/:id/dpr',auth,ctrl.createDPR)
router.get('/:id/dpr',auth,ctrl.getDPRs)

module.exports = router
