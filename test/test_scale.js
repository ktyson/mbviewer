//xcorner, ycorner, zoom
var arr = [
[1,-2,-1.5],
[0.3,-0.3,-0.666],
[3, -6,-4.5],
[-1.666,-0.055,0.11],
[-1.61, 0.00075, 0.0123]
];

var _width = 736;



var _xcorner = arr[0][0];
var _ycorner = arr[0][1];
var _zoom = arr[0][2];


var scaleUp =  -(1/_zoom) * _width;

var mbX = 0;
var mbY = 1;

var adjX = mbX + 2;
var adjY = mbY + 1.5;

var tempX = (_xcorner + adjX) * scaleUp;
var tempY = (_ycorner + adjY) * scaleUp;

var realX = tempX + (_width/2);
var realY = tempY - (_width/2);
    
console.log("scaleUp", scaleUp);
console.log("mb x y", mbX, mbY, "adj",adjX, adjY);
console.log("px x y", realX, realY);