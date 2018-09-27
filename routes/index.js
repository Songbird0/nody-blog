var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* some db request later... */
  const blogposts = [
	  {
	  	"author": "Anthony", 
	  	"title": "Title", 
	  	"description": "Subtitle",
	  	"publishDate": "7 Septembre 2018",
	  	"tags": [{
	  		"name": "rust", 
	  		"route": "/blog/rust"
	  	}, {
	  		"name": "wasm",
	  		"route": "/blog/wasm"
	  	}, {
	  		"name": "javascript",
	  		"route": "/blog/javascript"
	  	}]
	  },
	  {
	  	"author": "Anthony",
	  	"title": "Title", 
	  	"description": "Subtitle",
	  	"publishDate": "7 Septembre 2018",
	  	"tags": [{
	  		"name": "rust", 
	  		"route": "/blog/rust"
	  	}, {
	  		"name": "wasm",
	  		"route": "/blog/wasm"
	  	}, {
	  		"name": "javascript",
	  		"route": "/blog/javascript"
	  	}, {
	  		"name": "foo",
	  		"route": "/blog/foo"
	  	}]
	  },
  ];
  res.render('index', {
  	title: 'FIXME', blogposts: blogposts
  });
});

module.exports = router;
