function singleNumber(nums: number[]): number {
    let uniqNum = 0;
    for (let idx = 0; idx < nums.length; idx++) {
        uniqNum = uniqNum ^ nums[idx];
        //xor
    } return uniqNum;
}

console.log(singleNumber([4,5,3,4,3]))