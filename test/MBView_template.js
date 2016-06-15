// prototype class pattern
var MBView = (function() {
	// private static attributes
	var msg = "I am a Static Attribute"; // scale multiplier

	//private static methods
	function checkThisOut(param) {
		console.log("I was sent this: ", param);
	}

	//return constructor
	return function(idx, configPart) {
		
		//private attributes set by constructor
		var name, startPoint, endPoint;

		//privileged methods set by constructor
		this.testMethod = function(p) {
			console.log("I am Privileged and was sent: " + p + " And I added private attribute: " + msg);
		};

		//constructor code

		partIdx = idx;

	}
})();

//public static method
MBView.TestPublicStatic = function() {
	console.log ("Test of Public Static");
};

// public nonprivileged methods
MBView.prototype = {
	TestMethod: function(param) {
		console.log("Test of Public Method TestMethod, sent in: " + param);
		this.testMethod(param);
	}	
};

module.exports = MBView;
