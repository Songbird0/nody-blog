const mongoose = require("mongoose");

const blogpostSchema = new mongoose.Schema({
	"monetized": Boolean,
	"title": String,
	// may be used as description
	"subtitle": String,
	"author": String,
	"publishDate": { type: Date, default: Date.now },
	"updateDate": Date,
	// These path should be pointing  inside of `/static/images/**`.
	"logo": String,
	"meta": {
		tagList: Array,
		view: Number,
		singleVisitor: Number
	}
});

const blogSchema = new mongoose.Schema({
	"monetized": Boolean,
	"title": String,
	"subtitle": String,
	"blogposts": Array
});