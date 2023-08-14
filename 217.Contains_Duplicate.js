/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i=0; i<nums.length;i++){
        const newNum = nums.slice(i+1,nums.length);
        if (newNum.includes(nums[i])){
            return true;
        }else{
            return false;
        }
    }
};

console.log(containsDuplicate([1,2,1]))