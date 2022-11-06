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

function Subtract(a,b){
  return a-b
}
function product(p1, p2) {
  return p1 * p2;
}
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
