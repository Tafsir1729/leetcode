const climbStairs = (n) => {
    if (n == 1 || n == 0) return 1;
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    console.log(second);
}

module.exports = { climbStairs }