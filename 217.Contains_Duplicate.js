/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(1<=nums.length<=100000){
        for(let i=0; i<nums.length;i++){
            const num = nums[i];
            const newNum = nums.slice(i+1,nums.length);
            if (-1000000000 <= num <= 1000000000){
                if (newNum.includes(num)){
                    return true;
                }
            }else{
                return false
            }
        }
    }
    return false;
};

var opcontainsDuplicate = function(nums) {
    let newArr = [];
    if(1 <= nums.length && nums.length <= 100000){
        for(let i=0; i<nums.length;i++){
            const num = nums[i];
            console.log(newArr)
            if (-1000000000 <= num && num <= 1000000000){
                if (newArr.includes(num)){
                    return true;
                }else{
                    newArr.push(num);
                }
            }
        }
    }
    return false;
};

var opxcontainsDuplicate = function(nums) {
    let numSet = new Set();

    if (1 <= nums.length && nums.length <= 100000) {
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (-1000000000 <= num && num <= 1000000000) {
                if (numSet.has(num)) {
                    return true;
                } else {
                    numSet.add(num);
                }
            } else {
                return false;
            }
        }
    }

    return false;
};

console.log(opxcontainsDuplicate([2,14,18,22,22]))