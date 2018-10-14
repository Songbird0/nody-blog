const mongoose = require("mongoose");

const blogTagSchema = new mongoose.Schema({
        "tagName": String,
        "route": String
    })
    .method({
        "getRelatedBlogposts": function (cb) {
        	BlogPost
        	.findOne()
        	.where({
        		"meta": {
        			"tagList": {
        				"$all": [this.tagName]
        			}
        		}
        	})
        	.exec(cb);
        },
    });

const blogpostSchema = new mongoose.Schema({
        "monetized": Boolean,
        "title": String,
        // may be used as description
        "subtitle": String,
        "author": String,
        "publishDate": {
            type: Date,
            default: Date.now
        },
        "updateDate": Date,
        // These path should be pointing  inside of `/static/images/**`.
        "logo": String,
        "meta": {
            "tagList": Array,
            "view": Number,
            "singleVisitor": Number,
            "issue": Number,
            "hidden": Boolean
        }
    })
    .method({
        "beHidden": function (cb) {
        	BlogPost
        	.where({
                    "meta": {
                        "hidden": false,
                        "issue": this.issue
                    }
                })
        	.updateOne({
                    "meta": {
                        "hidden": true
                    }
                })
        	.exec(cb)
        },

        "isHidden": function(cb) {
        	BlogPost
        	.findOne()
        	.where({
        		"meta": {
        			"hidden": true
        		}
        	})
        	.exec(cb)
        },

        "bePublic": function (cb) {
        	BlogPost
        	.where({
                    "meta": {
                        "hidden": false
                    }
                })
        	.updateOne({
                    "meta": {
                        "hidden": true,
                        "issue": this.issue
                    }
                })
        	.exec(cb)
        },

        "beMonetized": function (cb) {
        	BlogPost
        	.where({
                    "monetized": true
                })
        	.updateOne({
                    "monetized": false,
                    "meta": {
                        "issue": this.issue
                    }
                })
        	.exec(cb)
        },

        "beFree": function (cb) {
        	BlogPost
        	.where({
                    "monetized": false
                })
        	.updateOne({
                    "monetized": true,
                    "meta": {
                        "issue": this.issue
                    }
                })
        	.exec(cb)
        },
    });



const blogSchema = new mongoose.Schema({
    "monetized": Boolean,
    "title": String,
    "subtitle": String,
    "blogposts": [blogpostSchema]
});

const BlogTag = mongoose.model("BlogTag", blogTagSchema);
const BlogPost = mongoose.model("BlogPost", blogpostSchema);
const Blog = mongoose.model("Blog", blogSchema);
