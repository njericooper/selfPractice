var findMedianSortedArrays = function(nums1, nums2) {
    var compare = (i,j) => {
        return i-j;
    }
    var arr = nums1.concat(nums2).sort(compare);
        if(arr.length % 2 == 0) {
            return (arr[arr.length/2 - 1]+ arr[arr.length/2])/2;
        }
        return arr[Math.floor(arr.length/2)];
};

console.log(findMedianSortedArrays());