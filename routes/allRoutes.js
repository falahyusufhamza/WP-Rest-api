const express = require('express');

const orgController = require('../controllers/org')
const groupController = require('../controllers/group')

const router = express.Router();

router.get('/orgs',orgController.getOrgs);
router.get('/org',orgController.getOrg)
router.post('/group',groupController.createGroup)
router.get('/group',groupController.getGroup)


module.exports = router;