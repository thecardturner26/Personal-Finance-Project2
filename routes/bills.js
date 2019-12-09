var express = require('express');
var router = express.Router();
var billsCtrl = require('../controllers/bills');






router.get('/bills', billsCtrl.index);
router.get('/new', billsCtrl.new);
router.get('/hub', billsCtrl.hub);
router.get('/online', billsCtrl.online);
router.get('/other', billsCtrl.other);
router.get('/utilities', billsCtrl.utilities)
router.post('/online', billsCtrl.create)
router.delete('/online', billsCtrl.delete);
//router.delete('/bills/:id', billsCtrl.delete);

module.exports = router;

