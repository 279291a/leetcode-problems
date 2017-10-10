/**
 * 思路：将两个数组连接，排序，奇数个数，找最中间的数，偶数个数，找最中间两数平均数
 * @param {*} nums1 
 * @param {*} nums2 
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var num = nums1.concat(nums2);
    num.sort(function(a,b){
      return a-b;
    });
    var length = num.length;

    if(length%2 === 0){
      return (num[length/2-1] + num[length/2])/2
    }

    return num[(length-1)/2];
};
