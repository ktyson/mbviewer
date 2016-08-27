// prototype class pattern
var MBOverlay = (function() {
	
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

		var _zoom;
		var _xcorner;
		var _ycorner;

		
		//privileged methods set by constructor
		
//		this.getMBCoords = function(x,y) {
//			
//			var realX = x;
//			var realY = _height - y;	
//
//			var scaleDown = _zoom/_width;	
//
//			var xMB = _xcorner + (realX * scaleDown);
//			var yMB = _ycorner + (realY * scaleDown);	
//
//			return {'x':xMB, 'y':yMB};
//			
//		}	

		
		this.createHtmlNode = function() {
		
			//var d = document.createElement("DIV");
			//d.setAttribute("style", "padding: 0px; margin: 0px;");
            
			var c = document.createElement("CANVAS");
			var d = document.getElementById(_parentDiv);
			c.setAttribute("width", _width+"px");
			c.setAttribute("height", _height+"px");
            
			c.setAttribute("id", _canvasDiv);
            c.setAttribute("z-index", 1);
			
			d.appendChild(c);
						
			_ctx = c.getContext("2d");
			
			//handle errs
			return true;
		};	

//		
//		this.setZoom = function(zoom, xcorner, ycorner) {
//			_zoom =   zoom;
//			_xcorner =  xcorner;
//			_ycorner = ycorner;			
//		};
//		
		this.drawDot = function(x,y) {


            var clr = {r:0,g:254,b:254};

            _ctx.fillStyle = "yellow"; // "rgba("+clr.r+","+clr.g+","+clr.b+",1)";
            _ctx.fillRect( x, y, 10, 10 );				
            
            
			return true;

		};

        
  		this.drawLine = function(x1,y1,x2,y2) {


            var clr = {r:0,g:254,b:254};

            _ctx.strokeStyle = "yellow"; // "rgba("+clr.r+","+clr.g+","+clr.b+",1)";               
            _ctx.beginPath();
            _ctx.moveTo(x1, y1);
            _ctx.lineTo(x2, y2);
            _ctx.stroke();           
            
			return true;

		};  
        
        this.clearOver = function() {
            _ctx.clearRect(0,0,_width,_height);
        };
        
        


		//constructor code
		
		_width =   width;
		_height =   height;		
		_canvasDiv = canvasDiv;
		_parentDiv = parentDiv;
		//set defaults
		_zoom =   3;
		_xcorner =  -2;
		_ycorner = -1.5;
		
		this.createHtmlNode();
		

	}
})();

// public static method

// public nonprivileged methods
MBOverlay.prototype = {
	DrawDot: function(x,y) {
		return this.drawDot(x,y);
	},
	DrawLine: function(x1,y1,x2,y2) {
		return this.drawLine(x1,y1,x2,y2);
	},  
    ClearOver: function() {
        return this.clearOver();
    },
	CreateHtmlNode: function() {
		return this.createHtmlNode();
	},
//	SetZoom: function(zoom, xcorner, ycorner) {
//		this.setZoom(zoom, xcorner, ycorner);		
//	}
}




module.exports = MBView;
