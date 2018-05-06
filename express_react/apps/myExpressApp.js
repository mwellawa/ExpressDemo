/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
"use strict";
var express = require("express");

module.exports = function() {
 	var app = express.Router();
	app.get("/", function(req, res) {
		res.send("Reponse from Express App Module");
	});
	return app;
};

