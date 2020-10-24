const maximumMinimumPath = function (ar) {
    let m = ar.length - 1;
    let n = ar[0].length - 1;
    let r = 0;
    let c = 0;
    let visited = [];

    const getNonVisitedMaxNode = function (matrix, r, c) {
        let dr = [-1, 1, 0, 0];
        let dc = [0, 0, -1, 1];
        let noRows = matrix.length - 1;
        let noColumns = matrix[0].length - 1;
        let max = Number.MIN_SAFE_INTEGER;
        let point = {};
        for (let i = 0; i < 4; i++) {
            let rr = r + dr[i];
            let cc = c + dc[i];
            if (rr < 0 || rr > noRows) continue;
            if (cc < 0 || cc > noColumns) continue;
            let temp = {r: rr, c: cc};
            if (max < matrix[rr][cc] && !isVisited(temp)) {
                max = matrix[rr][cc];
                point = temp;
            }
        }
        if(!point.r)
            console.log(`Not Updated....[${r},${c}]`)
        return point;
    }

    const isVisited = function (point) {
        return visited.find(t => t.r === point.r && t.c === point.c);
    }

    let minNode = ar[r][c];
    visited.push({r: 0, c: 0});
    while (r !== m || c !== n) {
        let point = getNonVisitedMaxNode(ar, r, c);
        visited.push(point);
        minNode = Math.min(ar[point.r][point.c], minNode);
        r = point.r;
        c = point.c;
    }
    // console.log(pathNodes);
    // console.log(visited);
    return minNode;
};

module.exports = {maximumMinimumPath}
