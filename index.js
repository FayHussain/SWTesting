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
