var express = require('express');
var router = express.Router();
var Bucket = require('../models/bucket');

router.get('/', function (req, res) {
	Bucket.find(function (err, buckets, count) {
		res.json(buckets);
	});
});

router.post('/', function (req, res) {
	new Bucket({
		name: req.body.name
	}).save( function (err, bucket) {
		res.json(bucket);
	});
});

module.exports = router;