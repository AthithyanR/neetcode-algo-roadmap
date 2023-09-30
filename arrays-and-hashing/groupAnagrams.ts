// function groupAnagrams(strs: string[]): string[][] {
//     const result = new Map<string, string[]>();
//     const store = new Map<string, number>();

//     for (const str of strs) {
//         store.clear();

//         for (const char of str) {
//             store.set(char, (store.get(char) ?? 0) + 1);
//         }

//         const identifier = [...store.entries()]
//             .sort((a, b) => a[0].localeCompare(b[0]) )
//             .map((v) => v.join(''))
//             .join('');

//         if (!result.has(identifier)) {
//             result.set(identifier, []);
//         }

//         result.get(identifier)!.push(str)
//     }

//     return [...result.values()];
// };

// sorting the string directly
function groupAnagrams(strs: string[]): string[][] {
    const result = new Map<string, string[]>();


    for (const str of strs) {
        const identifier = str.split('').sort().join('');

        if (!result.has(identifier)) {
            result.set(identifier, []);
        }

        result.get(identifier)!.push(str)
    }

    return [...result.values()];
};

console.log("result 1", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log("result 2", groupAnagrams([""]));
console.log("result 3", groupAnagrams(["a"]));
