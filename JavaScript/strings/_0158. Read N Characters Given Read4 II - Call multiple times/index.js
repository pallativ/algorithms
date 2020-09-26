/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
const solution = function(read4) {
    let queue = [];
    let EOF = false;
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let totalReadCount = queue.length;
        while(!EOF && totalReadCount <= n) {
            let tempBuf = []
            let count = read4(tempBuf);
            if(count === 0){
                EOF = true;
                break;
            }
            totalReadCount += count;
            queue.push(...tempBuf);
        }
        buf.push(...queue.splice(0, n));
        return buf.length;
    };
};