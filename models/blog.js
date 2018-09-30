const mongoose = require("mongoose");

const blogTagSchema = new mongoose.Schema({
        "tagName": String,
        "route": String
    })
    .method({
        "getRelatedBlogposts": function () {},
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
        "beHidden": function (issue, cb) {
            this.model("BlogPost")
                .updateOne({
                    "meta": {
                        "hidden": false,
                        "issue": issue
                    }
                }, {
                    "meta": {
                        "hidden": true
                    }
                }, {}, cb);
        },

        "bePublic": function (issue, cb) {
            this.model("BlogPost")
                .updateOne({
                    "meta": {
                        "hidden": true,
                        "issue": issue
                    }
                }, {
                    "meta": {
                        "hidden": false
                    }
                }, {}, cb);
        }

        "beMonetized": function (issue, cb) {
            this.model("BlogPost")
                .updateOne({
                    "monetized": false,
                    "meta": {
                        "issue": issue
                    }
                }, {
                    "monetized": true
                }, {}, cb);
        },

        "beFree": function (issue) {
            this.model("BlogPost")
                .updateOne({
                    "monetized": true,
                    "meta": {
                        "issue": issue
                    }
                }, {
                    "monetized": false
                }, {}, cb);
        },
    });



const blogSchema = new mongoose.Schema({
    "monetized": Boolean,
    "title": String,
    "subtitle": String,
    "blogposts": [blogpostSchema]
});
