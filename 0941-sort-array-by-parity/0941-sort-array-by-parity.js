/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let result = nums.sort((a, b) => (a % 2) - (b % 2))
    // let result = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] % 2 === 0) {
    //         result.push(nums[i])
    //     }
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] % 2 != 0) {
    //         result.push(nums[i])
    //     }
    // }
    return result;
};