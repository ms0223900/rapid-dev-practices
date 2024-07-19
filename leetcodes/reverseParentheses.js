function reverseStr(str = "") {
    return str.split("").reverse().join("");
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s = "(ed(et(oc))el)") {
    let stack = [""];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(") {
            stack.push("")
            continue
        }
        if (char === ")") {
            const popped = stack.pop();
            stack[stack.length - 1] = (stack[stack.length - 1] || "") + reverseStr(popped)
            continue
        }
        stack[stack.length - 1] += char
    }
    return stack[stack.length - 1];
};
var reverseParentheses2 = function (s) {
    while (s.includes('(')) {
        s = s.replace(/\(([^()]*)\)/g, match => {
            return reverseStr(match.slice(1, -1));
        });
    }
    return s;
};
console.log("reverseParentheses(): ", reverseParentheses());
console.log("reverseParentheses(a(bcdefghijkl(mno)p)q): ", reverseParentheses("a(bcdefghijkl(mno)p)q"));
console.log("reverseParentheses(a(bcdefghijkl(mno)p)q): ", reverseParentheses2("a(bcdefghijkl(mno)p)q"));
