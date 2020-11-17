const longestPalindrome = function (s) {

    const createTable = function (m, n) {
        let table = new Array(s.length);
        for (let i = 0; i < table.length; i++) {
            table[i] = new Array(5).fill(0);
        }
        return table;
    }

    const markSingleCharPalindrome = function (tb) {
        for (let i = 0; i < s.length; ++i) {
            let ar = tb[i];
            ar[i] = 1;
        }
    }

    const marlTwoCharLengthPalindrome = function (tb) {
        for (let i = 0; i < s.length; ++i) {
            if (s[i] === s[i + 1]) {
                let ar = tb[i];
                ar[i + 1] = 1;
                start = i;
                maxLength = 2;
            }
        }
    }

    let maxLength = 1;
    let start = 0; /// Start should be 0 Max Length 1;
    let table = createTable(s.length, s.length);
    markSingleCharPalindrome(table);
    //console.log(table);
    marlTwoCharLengthPalindrome(table);
    //console.log(table);

    for (let k = 3; k <= s.length; k++) {
        /// Fixing the starting position as zero.
        for (let i = 0; i < s.length - k + 1; i++) {
            /// Ending index.
            let j = i + k - 1;
            if (s[i] === s[j] && table[i + 1][j - 1] === 1) {
                table[i][j] = 1;
                if (k > maxLength) {
                    start = i;
                    maxLength = k;
                }
            }
        }
    }

    return s.slice(start, start + maxLength);
};

module.exports = {longestPalindrome}