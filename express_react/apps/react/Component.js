var React = require("react");
var createReactClass = require("create-react-class");




module.exports = {
	
	initReact: function(result) {

		var rows = [];
		for (var i = 0; i < result.Objects.length; ++i) {
			rows.push(
				React.createElement(
					"tr",
					null,
					React.createElement(
						"td",
						null,
						result.Objects[i].po_number
					),
					React.createElement(
						"td",
						null,
						result.Objects[i].total_amount
					)
				)
			);
		}

		var divStyle = {
		  border: "4px solid #555555",
		  "backgroundColor": "#8b9ebc",
		  width: "400px",
		  "textAlign": "center",
		  "borderCollapse": "collapse"
		};

		return createReactClass({
			render: function() {
				return React.createElement("table", { style: divStyle }, rows);
			}
		});

	}

};