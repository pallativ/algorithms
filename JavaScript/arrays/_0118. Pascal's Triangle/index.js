const generate = function (numRows) {
    if (numRows === 0)
        return [];
    let result = [[1]];
    for (let i = 1; i < numRows; i++) {
        let ar = [1];
        for (let j = 1; j < i; j++) {
            let prev = result[i - 1];
            ar.push(prev[j - 1] + prev[j]);
        }
        ar.push(1);
        result.push([...ar]);
    }
    return result;
};

module.exports = {generate}