function topKFrequent(nums: number[], k: number): number[] {
    const freq_store = new Map<number, number>();

    for (const num of nums) {
        freq_store.set(num, (freq_store.get(num) ?? 0) + 1)
    }

    return [...freq_store.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => num);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));