const calSqrt = (num) => {
    var low = 0;
    var high = num;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (mid * mid > num) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    console.log(high);
}

module.exports = { calSqrt }