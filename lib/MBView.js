// prototype class pattern
var MBView = (function() {
	
	// private static attributes
 

	//private static methods
// 	function checkThisOut(param) {
// 		console.log("I was sent this: ", param);
// 	}

	//return constructor
	return function(canvasDiv, parentDiv, width, height) {
		
		//private attributes set by constructor
		var _canvasDiv;
		var _parentDiv;
		var _ctx;
		var _width;
		var _height;		

		var _maxIter;
		var _maxSize; 
		var _zoom;
		var _xcorner;
		var _ycorner;

// var xcenter = -0.5;
// var ycenter = 0;

// var xoffset = 0;
// var yoffset = 0;

		
		
		
		
		

		//privileged methods set by constructor
		
		this.getMBCoords = function(x,y) {
			
			var realX = x;
			var realY = _height - y; //reverse direction

			var scaleDown = _zoom/_width; //zoom factor by canvas width	

			var xMB = _xcorner + (realX * scaleDown); 
			var yMB = _ycorner + (realY * scaleDown);	

			return {'x':xMB, 'y':yMB};
			
		}

		this.getPixelCoords = function(mbX,mbY) {

			var mbWidth = Math.abs(_zoom);

			var disX = Math.abs(mbX - _xcorner);
			var disY = Math.abs(mbY - _ycorner);

//console.log("mbwid", mbWidth, "dis", disX, disY);

			var pctX = disX / mbWidth;
			var pctY = disY / mbWidth;

//console.log("pct",pctX, pctY);

			var realX = pctX * _width;
			var realY = _width - (pctY * _width);				
       
			return {'x':realX, 'y':realY};
			
		}
		
		
		this.getSettings = function() {
			
			var objSettings = {};
			objSettings.width=_width;
			objSettings.height=_height;	
			objSettings.maxIter=_maxIter;
			objSettings.maxSize= _maxSize;
			objSettings.zoom=_zoom;
			objSettings.xcorner=_xcorner;
			objSettings.ycorner=_ycorner;
		
			return objSettings;
			
		}
		
		this.createHtmlNode = function() {
			
		//maxIter, maxSize, width, height, zoom, xcorner, ycorner
			
// 		<div style="display:inline-block">
// 		<canvas id="myCanvas7" width="50" height="50"
// 		style="border:1px solid #000000; cursor:crosshair">
// 		</canvas>
// 		</div>

			
		
			
			//d.setAttribute("style", "padding: 0px; margin: 0px;");
			var c = document.createElement("CANVAS");
			var d = document.getElementById(_parentDiv);
			c.setAttribute("width", _width+"px");
			c.setAttribute("height", _height+"px");
			//c.setAttribute("style", "cursor:crosshair");
			c.setAttribute("id", _canvasDiv);
			c.setAttribute("z-index", 0);
            
			d.appendChild(c);

			
			_ctx = c.getContext("2d");
			
			//handle errs
			return true;
		};	
		
		
		this.setLimits = function(maxIter, maxSize) {
			_maxIter = maxIter;
			_maxSize =  maxSize; 			
		};
		
		this.setZoom = function(zoom, xcorner, ycorner) {
			_zoom =   zoom;
			_xcorner =  xcorner;
			_ycorner = ycorner;			
		};
		
		this.render = function() {

			//check allowed range for object properties
			
			var newMbc = new MBCalc(_maxIter, _maxSize, _width, _height, _zoom, _xcorner, _ycorner);
			var arr = newMbc.MakeArray();
			
			for(var i = 0; i < arr.length; i++) {
				
//console.log(JSON.stringify(objMB));
				
				var objMB = arr[i];
				//expects objMB {'cx':cx, 'cy':cy, 'size':size, 'iter':iter, 'x':x, 'y': y};
				
				var clr = this.getColor(objMB.size, objMB.iter);
				
				_ctx.fillStyle = "rgba("+clr.r+","+clr.g+","+clr.b+",1)";
				_ctx.fillRect( objMB.x, objMB.y, 1, 1 );				
			}
			
			//handle errs
			return true;

		};
		
		
		this.getColor = function(c, maxCount) {

		    var color = {};
		
		    var incr = Math.floor(maxCount / 12);
		
		    for (var i = 1; i <= 12; i++ ) {
		
		      if(c < (i*incr)) {
		        color.r = gr[i][0];
		        color.g = gr[i][1];
		        color.b = gr[i][2];
		        color.a = 1;        
		        return color;
		      }
		
		    }
		
		    color.r = 0;
		    color.g = 22;
		    color.b = 55;
		    color.a = 1;    
		    return color;
		    //#71637D
		
		}

		//standard gray color range
		var gr = {};
		gr[1] = [180, 0, 54];
		gr[2] = [240, 240, 240];
		gr[3] = [220, 220, 220];
		gr[4] = [200, 200, 200];
		gr[5] = [180, 180, 180];
		gr[6] = [160, 160, 160];
		gr[7] = [140, 140, 140];
		gr[8] = [120, 120, 120];
		gr[9] = [100, 100, 100];
		gr[10] = [80, 80, 80];
		gr[11] = [60, 60, 60];
		gr[12] = [40, 40, 40];


		//constructor code
		
		_width =   width;
		_height =   height;		
		_canvasDiv = canvasDiv;
		_parentDiv = parentDiv;
		//set defaults
		_maxIter = 400;
		_maxSize =  4; 
		_zoom =   3;
		_xcorner =  -2;
		_ycorner = -1.5;
		
		this.createHtmlNode();
		

	}
})();

// public static method

// public nonprivileged methods
MBView.prototype = {
	Render: function() {
		return this.render();
	},
	CreateHtmlNode: function() {
		return this.createHtmlNode();
	},
	SetLimits: function(maxIter, maxSize) {
		this.setLimits(maxIter, maxSize);
	},
	SetZoom: function(zoom, xcorner, ycorner) {
		this.setZoom(zoom, xcorner, ycorner);		
	},
	GetSettings: function() {
		return this.getSettings();
	},
	GetMBCoords: function(x,y) {
		return this.getMBCoords(x,y);
	},
    GetPixelCoords: function(x,y) {
		return this.getPixelCoords(x,y);
	}
    
}




module.exports = MBView;
