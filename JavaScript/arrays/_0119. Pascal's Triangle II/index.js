const getRow = function (numRows) {
    if (numRows === 0)
        return [1];
    let prev = [1];
    let i, j;
    for (i = 1; i <= numRows; i++) {
        let ar = [1];
        for (j = 1; j < i; j++) {
            ar.push(prev[j - 1] + prev[j]);
        }
        ar.push(1);
        prev = ar;
    }
    return prev;
};
module.exports = {getRow}