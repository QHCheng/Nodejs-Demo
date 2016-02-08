var express = require('express');
var router = express.Router();

router.get('/a', function (req, res, next) {
	res.send('aaaaaaaa');
});

module.expports = router;

