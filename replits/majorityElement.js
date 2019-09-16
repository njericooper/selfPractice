var majorityElement = function(nums) {
    var arr = [3, 4, 3, 5, 4, 3];
    var majorityCount = 1;
    var arrayCountOfMajority = 0;
    var theNumberThatOccursMost;
    for(i=0; i< Array.length; i++) {
        for(var currentNumber = i; currentNumber<arr.length; currentNumber++)
        {
            if(arr[i] == arr[currentNumber])
            arrayCountOfMajority++;
            if(majorityCount<arrayCountOfMajority)
            {
                majorityCount = arrayCountOfMajority;
                theNumberThatOccursMost = arr[i];
            }
        }
        arrayCountOfMajority = 0;
    }
console.log(theNumberThatOccursMost+ " occurs " +majorityCount +" times ");
};

majorityElement();

/* initialize num and a counter  i with 0, 
for each element x in the input:
- if i = 0 then assign num = x and i = 1, 
- else if num = xthen ssign i = i+1
- else assign i = i-1

return num

*/