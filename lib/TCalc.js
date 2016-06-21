
//FIELD

//var arrEls = ["1","2","+", "-", "3"];

var arrEls = [
//" var ctr = 1; ",
//" for(var i = 0; i < 3; i++) { ",
" y = ", 
//" (z*i) ", 
" - ",  
" y ",
//" for(var j = 0; j < 3; j++) { ",
//" var mbName = 'T' + ctr; ",
" x = ",
" z = ",
" x ", 
" + ",  
//" (z*j) ",
//" console.log(z, x, c); ",
//" ctr++; ",
"1","2","+", "-", "3",
" } ",
" } ",
" { ",
" { ",
" ; ",
" ; ",
" ; ",
" ; "//, " return "
];

//var result = sliceArray(shuffle(arrEls)).join(' ');
//console.log(result);


for (var idx = 1; idx < 10000; idx++) {

//var result = sliceArray(shuffle(arrEls)).join(' ');
    //var arr1 = shuffle(arrEls);
    //var arr2 = sliceArray(arr1);
    var result = shuffle(arrEls).join(' ');

    try {
        var x;
        var evaled = eval(result);
        
        //STAGE - outputp
        console.log(idx + " => " + result + " => ", evaled);
    } catch(e) {
        //console.log(x, "Error");
    
    }    
    
}




//REACTOR (attempts to produce patterns to apply to the field)



function sliceArray(array) {
    
    var idx = Math.floor(Math.random() * (array.length - 1));
    var numEls = 1; //Math.floor(Math.random() * 2);
    
    array.splice(idx, numEls);
    
    return array;
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

