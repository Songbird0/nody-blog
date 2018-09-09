var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* some db request later... */
  const blogposts = [
	  {
	  	"author": "Anthony Defranceschi", 
	  	"title": "Title", 
	  	"description": "Subtitle",
	  	"publishDate": "7 Septembre 2018"
	  },
	  {
	  	"author": "Anthony Defranceschi", 
	  	"title": "Title", 
	  	"description": "Subtitle",
	  	"publishDate": "7 Septembre 2018"
	  },
  ];
  res.render('index', { title: 'Express', blogposts: blogposts });
});

module.exports = router;
