var lengthOfLongestSubstring = function(s) {
    let m = 0; //mlongest substring count
    let c = 0; //current count
    const l = {}; // new list as placeholder

    [...s].forEach((i, j) => {
        if (i in l && c <= l[i]) { // if index in list and count is less than or equal to list index
            m = Math.max(j - c, m); // whichever is biggest: (index j minus the count) OR the longest substring so far
            c = l[i] + 1; //count goes up
    }
        l[i] = j; // list index is j
    });

    return Math.max(s.length - c, m); // return which ever is largest: length of originalarray minus the count OR longest substring 
};

console.log(lengthOfLongestSubstring("abcabcbb"));