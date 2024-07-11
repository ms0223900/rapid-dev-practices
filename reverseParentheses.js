function reverseStr(str = "") {
    return str.split("").reverse().join("");
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s = "(ed(et(oc))el)") {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(") {
            stack.push("")
            continue
        }
        if (char === ")") {
            const popped = stack.pop();
            const reversed = reverseStr(popped);
            stack[stack.length - 1] += reversed
            continue
        }
        stack[stack.length - 1] += char
    }
    return stack[stack.length - 1];
};
console.log("reverseParentheses(): ", reverseParentheses());
