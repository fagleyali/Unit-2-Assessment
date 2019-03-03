var express = require('express');
var router = express.Router();
var indexCtrl = require('../controllers/index');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Unit 2 Assessment' });
// });
router.get('/', indexCtrl.index);
router.delete('/:id',indexCtrl.delete);
router.post('/',indexCtrl.addTodos );


module.exports = router;
