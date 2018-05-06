/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
"use strict";
var express = require("express");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var Component = require("./Component.js");
//var Styles = require("./styles.css");

module.exports = function() {
	var app = express.Router();
	app.get("/", function(req, res) {

		//Get data from DB
		var dbClient = req.db;
		dbClient.prepare(
			" SELECT * FROM \"EXPRESSDEMO_HDI_DB_1\".\"ExpressDemo.db::model.PurchaseOrderHeader\" ",
			function(err, statement) {
				if (err) {
					res.type("text/plain").status(500).send("ERROR: " + err.toString());
					return;
				}
				statement.exec([],
					function(statementErr, results) {
						if (statementErr) {
							res.type("text/plain").status(500).send("ERROR: " + err.toString());
							return;
						} else {
							var result = { Objects: results };
							//Display data via React
							var html = ReactDOMServer.renderToString(
								React.createElement(Component.initReact(result))
							);
							res.send(html);							
							//res.type("application/json").status(200).send(result);
						}
					});
			});


		
		//res.send("Hello World from React App Module");
	});
	return app;
};