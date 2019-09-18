/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
subarraySum = function(nums, k) {
    let subArrLen = 0, 
        subArrSum = 0,
        history = {0: -1};
        for(i=0; i< nums.length;i++)
            subArrSum += nums[1];
            if(history.hasOwnProperty(subArrSum-k))
        
    return subArrSum;
}

/* subarraySum = function(nums, k) {
    let subArrLen = 0, 
        subArrSum = 0,
        history = {0: -1};
        for(i=0; i< nums.length;i++){
            subArrSum += nums[1];
        }
    return subArrSum;
} */