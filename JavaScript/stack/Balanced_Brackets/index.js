function isBalanced(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if ("{[(".indexOf(char) > -1)
            stack.push(char);
        else {
            let matchChar = stack.pop();
            if ((matchChar !== "{" && char === "}") ||
                (matchChar !== "[" && char === "]") ||
                (matchChar !== "(" && char === ")")) {
                return "NO";
            }
        }
    }
    return stack.length === 0 ? "YES" : "NO";
}

module.exports = {isBalanced};