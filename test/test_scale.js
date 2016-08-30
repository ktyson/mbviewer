
//var input = 0.111111111111;
var input = 0.00123456789;
console.log(findLevel(input));

function findLevel(input) {
	for(var i = 1; i < 20; i++) {
		if(1/Math.pow(9,i) < input) {
			console.log(i);
			return i;
		}
	}
	return 0;
}