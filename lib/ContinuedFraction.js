//Purpose: derive a continued fraction in standard form based on almost any valid string expression
//source: http://mathafou.free.fr/exe_en/contfrac.html

// constantes usuelles
var pi = Math.PI;
var e = Math.E;
var M = Math.LOG10E; // 1/ln(10)
var M2 = Math.LOG2E; // 1/ln(2)

// alias
function lg2(x) {
 return M2*Math.log(eval(x));
}
function lg10(x) {
 return M*Math.log(eval(x));
}
function rac(x) {
  return Math.sqrt(eval(x));
}
function frac(x) {
  return (eval(x))%1;
}



var getContinuedFraction = function(val) {
  var s0 = val;
  var s = s0;
  var res="";
  var f = 0;
  var i = 0;
  var fr="[";
  var x = NaN;
  // remplace les ln par log (log néperien)
  // remplace les log par M*log() (log décimal)
  // log2 par M2*log (log base 2)
  if (s.search(/[&|!^~<=>$;,:?{}\[\]#"']|\+\+|--/)>=0) {
    alert("Illegal operation");
    f = 1;
  }
  else {
    s = s.replace(/log2/g,"lg2"); // save 'log2'
    s = s.replace(/log/g,"lg10"); // save 'log'
    s = s.replace(/ln/g,"log");
    var x0 = eval("with (Math) {"+s+"}");
  }
  if (!isNaN(x0) && isFinite(x0) && x0!=0) {
     //res = "<br>"+x0+"<br>&nbsp;";
     var p1 = 0; 
     var p2 = 1;
     var q1 = 1; 
     var q2 = 0;
     var sgn = (x0<0)?-1:+1;
     var x00 = Math.abs(x0);
     x = x00
     do {
       var a = Math.floor(x);
       if (i!=0) { fr+=","; }
       fr+=a;
       var p = p2*a + p1;
       var q = q2*a + q1;
       var eps = x00 - p/q;
       var r = x - a;
       //res+="<br>["+a+"] P/Q = "+p+" / "+q+" &asymp; "+(p/q)+", &epsilon; = "+eps;
       var x = 1/r;
       p1=p2; q1 = q2;
       p2 = p; q2 = q;
       i++;
     } while(q<10000000 && eps !=0);
     if (q>=10000000) { fr+="..."; }
     fr+="]";
     //res+=x0+" = "+((sgn<0)?"-":"")+fr;
     res+=fr;
  } // if !isNaN
  else if (f==0) {
    alert("Invalid expression\n"+x);
  }
  
  return res;
}


module.exports.getContinuedFraction = getContinuedFraction;