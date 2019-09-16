/* Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number. */

function fizzBuss(numbers) {
    var num = 1;
    var list;

while (num <= 100) {
list= (num % 3 === 0) ? (num%5===0 ? "FizzBuzz" : "Fizz") : (num%5===0 ? "Buzz" : num);
console.log(list);
num++;
}
}
console.log(fizzBuss());