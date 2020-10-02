/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p = 0, q = 0, index =0; 
    let copy = [...nums1];
    while(p < m && q < n){
        nums1[index++] = copy[p] > nums2[q] ? nums2[q++] : copy[p++];
    }
    if(p < m){
        for(let i= p; i < m; i++){
            nums1[index++] = copy[i];
        }
    }
    if(q < n){
        for(let i= q; i < n; i++){
            nums1[index++] = nums2[i];
        }
    }
};