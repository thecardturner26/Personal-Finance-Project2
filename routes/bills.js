var express = require('express');
var router = express.Router();
var billsCtrl = require('../controllers/bills');





//router.get('/', billsCtrl.index);
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.redirect('/bills');
//   //res.send('respond with a resource');
// });

router.get('/bills', billsCtrl.index);
router.get('/new', billsCtrl.new);
router.get('/hub', billsCtrl.hub);
router.get('/online', billsCtrl.online);
router.get('/other', billsCtrl.other);
router.get('/utilities', billsCtrl.utilities)
router.post('/bills/online', billsCtrl.create)

module.exports = router;






// var express = require('express');
// var router = express.Router();
// var moviesCtrl = require('../controllers/movies');

// router.get('/', moviesCtrl.index);
// router.get('/new', moviesCtrl.new);
// router.get('/:id', moviesCtrl.show);
// router.post('/', moviesCtrl.create);

// module.exports = router;
