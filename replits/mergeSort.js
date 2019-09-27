var arr = [33, 6, 40, 15, 64, 4, 2]

var sort = (arr) =>{
    if(arr.length <= 1) return arr;
    var middle = arr.length / 2 ;
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);
    return merge(sort(left), sort(right));
}

var merge = (left, right) => {
    var result = [];
    while(left.length || right.length) {
        if(left.length && right.length) {
            if(left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        } else if(left.length) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result;
}

console.log(sort(arr));