function getSortedStrKey(strKey) {
    return strKey.split("").sort().join("");
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length === 0) {
        return [];
    }

    let strMap = {};
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const sortedStrKey = getSortedStrKey(str);

        if (!strMap[sortedStrKey]) {
            strMap[sortedStrKey] = [str]
        } else {
            strMap[sortedStrKey].push(str)
        }
    }
    const vals = Object.values(strMap);

    let res = [];
    for (let i = 0; i < vals.length; i++) {
        res.push(vals[i])
    }
    return res;

};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// [["bat"],["nat","tan"],["ate","eat","tea"]]
