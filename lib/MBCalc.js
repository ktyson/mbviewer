// prototype class pattern
var MBCalc = (function() {
	//private static attributes
	
	//private static methods


	//return constructor
	return function(maxIter, maxSize, width, height, zoom, xcorner, ycorner) {
		
		//private attributes set by constructor
		var _maxIter, _maxSize, _width, _height, _zoom, _xcorner, _ycorner;
		
		//maxIter = number of iterations to try before giving up trying to make the point show it is going to explode
		//maxSize = the number that, when surpassed during an iteration, we assume to be an explosion, an unbounded result, outside the MSet	
		//width and height: dimensions of a plane of pixels
		//zoom: the scale factor used to adjust viewing small subsets of the plane
		//xcorner, ycorner: the x,y up-left corner of the small subset being requested	

		//privileged methods set by constructor
		this.makeArray = function() {
			//make an array of tested coordinates
			var arr = [];
			
			//x,y are the coordinates of pixels on a screen
			//cx, cy are converted to coordinates in the complex plane
			
			for (var x = 1; x <= _width; x++) {
				for (var y = 1; y <= _height; y++) {
					
				    var cx = _xcorner + ((x * _zoom) / _width);
      				var cy = _ycorner + ((y * _zoom) / _height);
					var resObj = this.testPoint(cx, cy);
					resObj.x = x;
					resObj.y = y;
					arr.push(resObj);
				
				}
			}			
			return arr;
		
		};
		
		this.testPoint = function(cx, cy) {
			//test if a given coordinate of the complex plane is in or out of MSet
			var iter = 0;
			var size = 0;
			
			var zx = 0;
			var zy = 0;

			while (iter < _maxIter && size <= _maxSize) {
				iter += 1;
				temp = (zx * zx) - (zy * zy);
				zy = (2 * zx * zy) + cy;
				zx = temp + cx;
				size = Math.floor((zx * zx) + (zy * zy));
			}
			
			return {'cx':cx, 'cy':cy, 'size':size, 'iter':iter};				
					
		};

		//constructor code
		_maxIter = maxIter; 
		_maxSize = maxSize;
		_width =  width;
		_height =  height;
		_zoom =  zoom;
		_xcorner =  xcorner;
		_ycorner = ycorner;

	}
})();

//public static method
MBCalc.TestPublicStatic = function() {
	console.log ("Test of Public Static");
};

// public nonprivileged methods
MBCalc.prototype = {
	TestPoint: function(cx, cy) {
		return this.testPoint(cx, cy);
	},
	MakeArray: function(cx, cy) {
		return this.makeArray(cx, cy);
	}	
};

module.exports = MBCalc;
