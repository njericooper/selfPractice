var longestPalindrome = function(str) {
    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    if (strArr != null) {
        strArr.forEach((elem) => {
        result.push(elem[0]);
        });
    }
    console.log(result.match(/^$/));
    return result;
    
};

console.log(...longestPalindrome("babad"));