var express = require('express');
var User = require('./models/user');
var router = express.Router();

router.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.infos = req.flash("info");
    next();
});

router.get("/", function (req, res, next) {
    User.find()
        .sort({ createdAt: "decending"})
        .exec(function (err, users) {
            if(err){return next(err); }
            res.render("index", {users: users});
        })
})