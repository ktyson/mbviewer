var mbc = require('../lib/MBCalc.js');



//static public method 
mbc.TestPublicStatic();


//maxIter, maxSize, width, height, zoom, xcorner, ycorner
var mbCalc = new mbc(200, 4, 3, 3, 3, -2, 1);
var res = mbCalc.TestPoint(0, 0);

console.log(JSON.stringify(res));

res = mbCalc.MakeArray();
console.log(JSON.stringify(res));
