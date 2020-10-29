const regionsBySlashes = function (grid) {

    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];
    const union = function (u, v) {

    }

    let N = grid.length;
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            let root = 4 * (r * N + c);
            if (grid[r][c] === "/") {
                union(root + 0, root + 2);
                union(root + 1, root + 3);
            } else if (grid[r][c] === "\\") {
                union(root + 0, root + 1);
                union(root + 2, root + 3);
            }

            if (r + 1 < N)
                union(root + 3, root + (4 * N) + 0);
            if (r - 1 >= 0)
                union(root + 0, root - (4 * N) + 3);
            if (c + 1 < N)
                union(root + 2, (root + 4) + 1);
            if (c - 1 >= 0)
                union(root + 1, (root - 4) + 2);
        }
    }
}