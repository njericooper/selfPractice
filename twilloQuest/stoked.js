function getStoked(inputString) {
  // Your code goes here!
  var newWord = inputString.toUpperCase();
  return newWord + "!!!";
  
}
module.exports = getStoked;



// This code is here to let you test out how your function works
let result = getStoked('am i stoked enough yet');
console.log(result || `Looks like the function doesn't return anything yet.`);
