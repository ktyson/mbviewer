// prototype class pattern
var MBView = (function() {
	
	// private static attributes
 

	//private static methods
// 	function checkThisOut(param) {
// 		console.log("I was sent this: ", param);
// 	}

	//return constructor
	return function(canvasDiv) {
		
		//private attributes set by constructor
		var _canvasDiv;

		//privileged methods set by constructor
		this.createHtmlNode = function() {
			
// 		<div style="display:inline-block">
// 		<canvas id="myCanvas7" width="50" height="50"
// 		style="border:1px solid #000000; cursor:crosshair">
// 		</canvas>
// 		</div>
		
			var d = document.createElement("DIV");
			var c = document.createElement("CANVAS");
			
			d.appendChild(c);
			document.body.appendChild(d);
			
		};

		//constructor code
		_canvasDiv = canvasDiv;
		
		this.createHtmlNode();

	}
})();

// public static method

// public nonprivileged methods

module.exports = MBView;
