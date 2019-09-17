//find the nth Smallest value in array using least amount of code **but is still readable**

var arr = [13, 11, 19, 17, 21, 15, 26];

var thing = arr.sort(function(a, b){
  return a-b;
});
console.log(arr[6-1]);// first value is the requested index location. The -1 is because arrays start at 0
