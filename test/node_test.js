var mbv = require('./MBView.js');



//static public method 
mbv.TestPublicStatic();

//public method with trace to private
var newMbv = new mbv();
newMbv.TestMethod('this is some kind of test');

