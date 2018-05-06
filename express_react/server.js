/*eslint no-console: 0, no-unused-vars: 0*/

"use strict";



var https = require("https");
var server = require("http").createServer();
var xsenv = require("@sap/xsenv");

//Set security certificates
https.globalAgent.options.ca= xsenv.loadCertificates(); 	

//Load initializer
global.__base = __dirname + "/";
var init = require(global.__base + "utils/initialize.js");

//Initialize Express App for XSA UAA and HDBEXT Middleware
var app = init.initExpress();

//Setup Routes
var router = require(global.__base + "utils/router.js")(app);

//Initialize the XSJS Compatibility Layer
init.initXSJS(app);

//Start the Server
var port = process.env.PORT || 3000;
server.on("request", app);
server.listen(port, function() {
	console.info("HTTP Server: " + server.address().port);
});










/*
"use strict";

var xsjs  = require("@sap/xsjs");
var xsenv = require("@sap/xsenv");
var port  = process.env.PORT || 3000;

var options = {
	//anonymous : true, // remove to authenticate calls
	redirectUrl : "/index.xsjs"
};

// configure HANA
try {
	options = Object.assign(options, xsenv.getServices({ hana: {tag: "hana"} }));
} catch (err) {
	console.log("[WARN]", err.message);
}

// configure UAA
try {
	options = Object.assign(options, xsenv.getServices({ uaa: {tag: "xsuaa"} }));
} catch (err) {
	console.log("[WARN]", err.message);
}

// start server
xsjs(options).listen(port);

console.log("Server listening on port %d", port);
*/
