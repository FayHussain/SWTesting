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

function myFunction(p1, p2) {
  return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
