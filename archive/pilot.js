function getArray(zoom, xcorner, ycorner, 
width, height, maxCount, maxSize) {

//maxCount = number of iterations to try
//maxSize = the number that, when surpassed on an iteration, we assume to be an explosion


var arr = [];

//var start = new Date();


for (var x = 1; x <= width; x++) {
    for (var y = 1; y <= height; y++) {
      var count = 0;
      var size = 0;
      var cx = xcorner + ((x * zoom) / width);
      var cy = ycorner + ((y * zoom) / height);

      var zx = 0;
      var zy = 0;

      while (count < maxCount && size <= maxSize) {
        count += 1;
        temp = (zx * zx) - (zy * zy);
        zy = (2 * zx * zy) + cy
        zx = temp + cx;
        size = Math.floor((zx * zx) + (zy * zy));
      }

      //this.Plot(x, y, count); // count serves as a good color hint.

      //console.log(x, y, count);

      var obj = {x:x, y:y, clr: getColor(count, maxCount)}
      //var obj = {x:x, y:y, clr: getColor()}

      arr.push(obj);

    }
  }


  //var end = new Date();
  //var elapsed = (end - start) / 1000;
  //alert("time: " + elapsed + " secs");

//   function getColor() {
// 
//     var color = {};
// 
//         color.r = 200;
//         color.g = 100;
//         color.b = 100;
//         color.a = 1;        
//         return color;
//   }


  function getColor(c, maxCount) {

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
    color.g = 0;
    color.b = 0;
    color.a = 1;    
    return color;

    // if(c < 10){
    //   color.r = gr[1][0];
    //   color.g = gr[1][1];
    //   color.b = gr[1][2];
    //   color.a = 1;

    // } else if(c < 20) {
    //   color.r = gr[2][0];
    //   color.g = gr[2][1];
    //   color.b = gr[2][2];
    //   color.a = 1;

    // } else if(c < 30) {
    //   color.r = gr[3][0];
    //   color.g = gr[3][1];
    //   color.b = gr[3][2];
    //   color.a = 1;

    // } else if(c < 40) {
    //   color.r = gr[4][0];
    //   color.g = gr[4][1];
    //   color.b = gr[4][2];
    //   color.a = 1;

    // } else if(c < 50) {
    //   color.r = gr[5][0];
    //   color.g = gr[5][1];
    //   color.b = gr[5][2];
    //   color.a = 1;

    // } else if(c < 60) {
    //   color.r = gr[6][0];
    //   color.g = gr[6][1];
    //   color.b = gr[6][2];
    //   color.a = 1;

    // } else if(c < 70) {
    //   color.r = gr[7][0];
    //   color.g = gr[7][1];
    //   color.b = gr[7][2];
    //   color.a = 1;

    // } else if(c < 80) {
    //   color.r = gr[8][0];
    //   color.g = gr[8][1];
    //   color.b = gr[8][2];
    //   color.a = 1;

    // } else if(c < 100) {
    //   color.r = gr[9][0];
    //   color.g = gr[9][1];
    //   color.b = gr[9][2];
    //   color.a = 1;

    // } else if(c < 160) {
    //   color.r = gr[10][0];
    //   color.g = gr[10][1];
    //   color.b = gr[10][2];
    //   color.a = 1;

    // } else if(c < 280) {
    //   color.r = gr[11][0];
    //   color.g = gr[11][1];
    //   color.b = gr[11][2];
    //   color.a = 1;


    // } else {
    //   color.r = 0;
    //   color.g = 0;
    //   color.b = 0;
    //   color.a = 1;
    // }

    
  }

  return arr;

}


var gr = {};
gr[1] = [0, 0, 0];
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

// //gr[1] = [255, 0, 101];
// gr[1] = [0, 0, 0];
// gr[2] = [239, 92, 113];
// gr[3] = [239, 104, 86];
// gr[4] = [240, 140, 81];
// gr[5] = [240, 180, 75];
// gr[6] = [241, 222, 70];
// gr[7] = [216, 242, 64];
// gr[8] = [168, 242, 59];
// gr[9] = [118, 243, 53];
// gr[10] = [64, 243, 47];
// gr[11] = [42, 244, 76];
// gr[12] = [21, 244, 101];