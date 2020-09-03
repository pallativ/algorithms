class stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        this.items.pop();
    }
    length() {
        return this.items.length;
    }
    getString() {
        let result = '';
        this.items.forEach(t => result += t);
        return result;
    }
}

function super_reduced_string_v1(str) {
    let ans = [];
    for (i = 0; i < str.length; i++) {
        if (ans.length === 0)
            ans.push(str[i]);
        else {
            let item = ans.pop(); /// Instead of poping the record, we can have memory of the last characted we inserted.
            if (item !== str[i]) {
                ans.push(item);
                ans.push(str[i]);
            }
        }
    }
    return ans.join('');
}


// This approach contains one character at the end if there is match even after completing the reduced string.
function super_reduced_string_v2(str) {
    let ans = [];
    let ansLength = -1;
    for (let i = 0; i < str.length; i++) {
        if (ans.length === 0) {
            ans[++ansLength] = str[i];
        }
        else {
            if (ans[ansLength] !== str[i]) {
                ans[++ansLength] = str[i];
            }
            else {
                ans[ansLength--] = '';
            }
        }
    }
    return ansLength > -1 ? ans.join('') : "Empty String";
}

// This approach contains one character at the end if there is match even after completing the reduced string.
function super_reduced_string_v3(str) {
    let ans = [];
    let ansLength = 0;
    for (let i = 0; i < str.length; i++) {
        if (ans.length === 0) {
            ans[ansLength++] = str[i];
        }
        else {
            if (ans[ansLength-1] !== str[i]) {
                ans[ansLength++] = str[i];
            }
            else {
                ans[--ansLength] = '';
            }
        }
    }
    return ansLength > 0 ? ans.join('') : "Empty String";
}

module.exports = { super_reduced_string_v1, super_reduced_string_v2,super_reduced_string_v3 };