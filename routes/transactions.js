var express = require('express');
var router = express.Router();
var controllers = require('../controllers/transactionsController')

router.route('/')
.get(controllers.getTranactions)
.post(controllers.addTranactions)




router.route('/:id')
.delete(controllers.deleteTranactions)
module.exports = router;
