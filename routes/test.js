const express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const heavy_processing = new Promise((resolve, reject) => {
  	setImmediate((message) => {
  		var i = 0;
  		while(i < 50000) {
  			i++;
  		}
  		resolve(message);
  	}, 'Done!');
  })
  .then(console.log)
  .catch(console.err);
  res.send('Hi there!');
});

module.exports = router;
