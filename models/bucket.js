var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bucket = new Schema({
	name: {type: String, required: true },
	description: String
});

module.exports = mongoose.model('Bucket', Bucket);