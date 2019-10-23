var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = [1,3];
    nums2 = [2];
    nums3 = nums1.concat(nums2);
    sorted = nums3.sort();
    if((sorted.length) % 2 === 1) { // is an odd number
        var middle = sorted[Math.floor((sorted.length - 1) / 2)];
        return middle;
    }
    else ((sorted.length) % 2 === 0) { // is an even number
        var middleEven = sorted[Math.floor((sorted.length - 1) + (sorted)/ 2)];
    } 

    return middle;
};

console.log(findMedianSortedArrays());