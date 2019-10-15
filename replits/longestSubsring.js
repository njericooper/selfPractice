var lengthOfLongestSubstring = function(s) {
    let m = 0;
    let c = 0;
    const l = {};

    [...s].forEach((char, i) => {
        if (char in l && c <= l[char]) {
            m = Math.max(i - c, m);
            c = l[char] + 1;
    }
        l[char] = i;
    });

    return Math.max(s.length - c, m);
};

console.log(lengthOfLongestSubstring("abcabcbb"));