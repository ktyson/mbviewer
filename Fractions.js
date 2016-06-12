//Purpose: derive fraction information to given depth
//depth specifies the highest denominator considered
//equivalent fractions ignored
//only fractions between 0 and 1 are generated

var contFr = require("./ContinuedFraction.js");


var depth = process.argv[2];
iterateFractions(depth);



function iterateFractions(depth) {

    var arrFractions = [];
    var mapContFractions = {};

    //iterate an array of fractions
    for(var d = 2; d <= depth; d++) {
        for(var n = 1; n < d; n++) {
            arrFractions.push({"n":n,"d":d});
        } 
    }
    
console.log("created array of fractions to depth " + depth, arrFractions.length + " iterated");
    
    //create a hash map of continued fractions, thereby eliminating all equivalent fractions
    var mapContFractions = {};
    
    for(var i = 0; i < arrFractions.length; i++) {
        
        var objFrac = arrFractions[i];
        var exprFrac = objFrac.n + "/" + objFrac.d;
        var conFrac = contFr.getContinuedFraction(exprFrac);
        if(!mapContFractions[conFrac]){
            objFrac.x = objFrac.n/objFrac.d
            mapContFractions[conFrac] = objFrac;
        }
    }

console.log("reduced to hash map of " + Object.keys(mapContFractions).length + " unique elements");
    //sort the hash map
    var  mapOrderedContFractions = {};
    Object.keys(mapContFractions).sort(function(a,b){
        // var aClean = parseInt(a.replace(",","").replace("[","").replace("]",""));
        // var bClean = parseInt(b.replace(",","").replace("[","").replace("]",""));
        var aClean = parseInt(mapContFractions[a].x * 100000000000000000000);
        var bClean = parseInt(mapContFractions[b].x * 100000000000000000000);
        return aClean - bClean;
    }).forEach(function(key) {
        mapOrderedContFractions[key] = mapContFractions[key];
    });

    
    //garner increments
    var lastx = 0;
    for(key in mapOrderedContFractions) {
        var obj =  mapOrderedContFractions[key]; 
        if(lastx > 0) {
            var newIncr = obj.x - lastx;
            mapOrderedContFractions[key].i = newIncr;
        } else {
            mapOrderedContFractions[key].i = obj.x;
        }
        lastx = obj.x;
        
    } 



   
//     //printout
//     for(key in mapOrderedContFractions) {
 
//         var obj =  mapOrderedContFractions[key];  
// console.log(key, mapOrderedContFractions[key]); //.n, obj.d, obj.x)
        
        
//     } 
    
    //diagram
    for(key in mapOrderedContFractions) {
        
        var obj =  mapOrderedContFractions[key]; 
        
        var dp = 10000;
        var nm = Math.floor(obj.i * dp);
        var xx = Array(nm).join("=");
        console.log(xx);
        

        
    } 
    
    

}