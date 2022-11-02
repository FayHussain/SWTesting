function mooncakeSays(message) {
  let mooncake = '(o.o)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
function sum(a,b){
  return a+b
}
module.exports.sum = sum
let x = 1;
console.log(x);

var x = 6; // x is global
var y = 4; // y is global

function add (a, b) { 
  var x = a + b;  
  return x;       
}

function add (a, b) {
  x = a + b;  
  return x;   
}
