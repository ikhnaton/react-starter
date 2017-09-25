const express = require('express');
const router = require('express').Router();

router.use("/", express.static(__dirname + '/../../www'));
//router.use("/api", require('./api'));

router.get('/', function(req, res){
	res.redirect("/index.html");
});

router.get('/app', function(req, res){
	res.redirect("/app/index.html");
});

module.exports = router;
