function isAnagram(s: string, t: string): boolean {
    const store = new Map<string, number>();

    for (const char of s) {
        store.set(char, (store.get(char) ?? 0) + 1);
    }

    for (const char of t) {
        store.set(char, (store.get(char) ?? 0) - 1);
    }

    return [...store.values()].every((v) => v === 0)
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
