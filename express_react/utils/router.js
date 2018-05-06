"use strict";

module.exports = function(app){
	app.use("/node/expressApp", require("../apps/myExpressApp.js")());
	app.use("/node/reactApp", require("../apps/react/myReactApp.js")());
};