const merge = (nums1, nums2, m, n) => {
    nums1 = nums2.concat(nums1);
    nums1.sort((a, b) => { return a - b });
    nums1 = nums1.slice(m + n - n);
    console.log(nums1);
}

module.exports = { merge }