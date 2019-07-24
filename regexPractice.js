const a = "The quick brown fox jumps over the lazy dog.";
const b = "There were 614 instances of students getting 90.0% or above.";
const c = "The FCC had to censor the network for saying &$#*@!.";

let match = /./.test(a);
let otherMatch = /./.test(b);
let theOtherMatch = /./.test(c);

console.log(match);
console.log(otherMatch);
console.log(theOtherMatch);


//word boundary
//any word containing the word "word", not case sensitive

var string = "aword";

let word = /\bword\b, i/.test(string);
