/*var majorityElement = function(nums) {
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
        return theNumberThatOccursMost;
    }
    
};

//majorityElement();
console.log(majorityElement(theNumberThatOccursMost));*/

/* initialize currentArrayNumber and a counter  i with 0, 
for each element x in the input:
- if i = 0 then assign currentArrayNumber = x and i = 1, 
- else if currentArrayNumber = xthen ssign i = i+1
- else assign i = i-1

return currentArrayNumber

*/

var majorityElement = function(nums) {
    var majorityCount = (nums.length / 2 | 0);
            for (var i = 0; i < nums.length; i++) {
                var currentArrayNumber = nums[i];
                {
                    var count = 0;
                    for (var j = 0; j < nums.length; j++) {
                        var elem = nums[j];
                        {
                            if (elem === currentArrayNumber) {
                                count += 1;
                            }
                        }
                    }
                    if (count > majorityCount) {
                        return currentArrayNumber;
                    }
                }
            }
            return -1;
    };
