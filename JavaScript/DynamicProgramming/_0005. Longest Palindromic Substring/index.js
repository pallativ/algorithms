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
            totalPalindromeCount++;
        }
    }

    const marlTwoCharLengthPalindrome = function (tb) {
        for (let i = 0; i < s.length; ++i) {
            if (s[i] === s[i + 1]) {
                let ar = tb[i];
                ar[i + 1] = 1;
                start = i;
                maxLength = 2;
                totalPalindromeCount++;
            }
        }
    }

    let totalPalindromeCount = 0;
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
                totalPalindromeCount++;
                if (k > maxLength) {
                    start = i;
                    maxLength = k;
                }
            }
        }
    }
    //console.log("#Total:" + totalPalindromeCount);
    return s.slice(start, start + maxLength);
};

const expandCenter = function (s) {
    let maxLength = 1;
    let start = 0;
    let low = 0;
    let high = 0;

    const isValidIndex = function (index) {
        return index >= 0 && index < s.length;
    }

    const getCountBy = function (low, high) {
        return high - low + 1;
    }

    const matchChars = function (low, high) {
        while (isValidIndex(low) && isValidIndex(high) && s[low] === s[high]) {
            if (getCountBy(low, high) > maxLength) {
                start = low;
                maxLength = getCountBy(low, high);
            }
            low--;
            high++;
        }
    }

    const findEvenPalindrome = function (i) {
        low = i - 1;
        high = i;
        matchChars(low, high);
    }

    const findOddPalindrome = function (i) {
        let left = i - 1;
        let right = i + 1;
        matchChars(left, right);
    }

    for (let i = 1; i < s.length; i++) {
        findEvenPalindrome(i);
        findOddPalindrome(i);
    }
    return s.slice(start, start + maxLength);
}

module.exports = {longestPalindrome, expandCenter}