
var testtgt = {'zoom':3, 'xcorner':-2, 'ycorner':-1.5};
resetTopViews(testtgt);
resetMidViews(testtgt);
resetBasViews(testtgt);

function resetTopViews(tgt) {

    //****
    var z = tgt.zoom; 
    var x = tgt.xcorner - z; 
    var y = tgt.ycorner + z; 

    var ctr = 1;
    
    for(var i = 0; i < 3; i++) {
        
        var newY = y - (z*i);
        
        for(var j = 0; j < 3; j++) {
            
            ///*****
            var newX = x + (z*j);
            
            var mbName = "T" + ctr;
            ctr++;
            
//console.log(z, mbName, newX, newY);
            MBVSet[mbName].SetZoom(z,newX, newY);       
            MBVSet[mbName].Render();
        }
        
    }

}


function resetMidViews(tgt) {

    //******
    var z = (tgt.zoom/3); 
    var x = tgt.xcorner; 
    var y = tgt.ycorner; 

    var ctr = 1;
    
    for(var i = 0; i < 3; i++) {
        
        var newY = y + (z*i); ///****
        
        for(var j = 0; j < 3; j++) {
            
            ///
            var newX = x + (z*j); ///+ to -
            ////
            
            var mbName = "M" + ctr;
            ctr++;
            
//console.log(z, mbName, newX, newY);
            MBVSet[mbName].SetZoom(z,newX, newY);       
            MBVSet[mbName].Render();
        }
        
    }

}


function resetBasViews(tgt) {

    //******
    var z = (1/tgt.zoom); 
    var x = tgt.xcorner + 1; 
    var y = tgt.ycorner + 1; 

    var ctr = 1;
    
    for(var i = 0; i < 3; i++) {
        
        var newY = y - (z*i);
        
        for(var j = 0; j < 3; j++) {
            
            ///
            var newX = x - (z*j); ///+ to -
            ////
            
            var mbName = "B" + ctr;
            ctr++;
            
//console.log(z, mbName, newX, newY);
            MBVSet[mbName].SetZoom(z,newX, newY);       
            MBVSet[mbName].Render();
        }
        
    }

}
       
