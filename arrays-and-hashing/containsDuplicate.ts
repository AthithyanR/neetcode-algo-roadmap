function containsDuplicate(nums: number[]): boolean {
    const store = new Set();

    for (const num of nums) {
        if (store.has(num)) {
            return true;
        }

        store.add(num);
    }

    return false;
};

console.log(containsDuplicate([1,2,3]));
console.log(containsDuplicate([1,2,3,1]));
