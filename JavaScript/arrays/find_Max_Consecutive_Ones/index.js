var findMaxConsecutiveOnes = function (nums) {
    let prev_char = undefined;
    let curr_window_count = 0;
    let result = 0;
    for (let char of nums) {
        if (char === 1)
            curr_window_count++;
        else {
            result = result < curr_window_count ? curr_window_count : result;
            curr_window_count = 0;
        }
    }
    result = result < curr_window_count ? curr_window_count : result;
    return result;
};

module.exports = {findMaxConsecutiveOnes};