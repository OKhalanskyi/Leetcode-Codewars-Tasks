function twoSum(nums: number[], target: number): number[] {
    let outputArr = []

    nums.map((elem, index)=>{
        let sliceNums = nums.slice(index+1)
        sliceNums.map((each)=>{
            if(elem+each === target){
                outputArr.push(nums.indexOf(elem))
                outputArr.push(sliceNums.indexOf(each)+index+1)
            }
        })
    })

    return outputArr
}

console.log(twoSum([3,3,3,3,3], 6))