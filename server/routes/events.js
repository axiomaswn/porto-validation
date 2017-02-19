var express = require('express');
var router  = express.Router();
var controller = require('../controllers/events.js')

router.get('/', controller.getAll)
router.post('/', controller.create)

module.exports = router;
