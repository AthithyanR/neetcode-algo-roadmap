function twoSum(nums: number[], target: number): number[] {
    const store = new Map<number, number>();

    for (let i=0; i < nums.length; i++) {
        if (store.has(nums[i])) {
            return [store.get(nums[i])!, i]
        }

        store.set(target - nums[i], i)
    }

    return []
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
