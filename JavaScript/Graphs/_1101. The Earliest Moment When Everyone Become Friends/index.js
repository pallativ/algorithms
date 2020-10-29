const earliestAcq = function (logs, N) {

    if(logs.length < N-1)
        return -1;

    let count = N;
    let parents = new Array(N);
    let ranks = new Array(N).fill(0);
    const getAllDisjointSet = function () {
        for (let i = 0; i < N; i++)
            parents[i] = i;
    }

    const find = function (x) {
        if (parents[x] !== x)
            parents[x] = find(parents[x]);
        return parents[x];
    }

    const union = function (u, v) {
        let ur = find(u);
        let vr = find(v);
        if (ur !== vr)
        {
            if (ranks[ur] >= ranks[vr]) {
                parents[vr] = ur;
                ranks[ur]++;
            } else {
                parents[ur] = vr;
                ranks[vr]++;
            }
            count--;
        }
    }

    const union_find = function () {
        let timestamp, u, v;
        for (let log of logs) {
            [timestamp, u, v] = log;
            union(u, v);
            if (count === 1)
                return timestamp;
        }
        return -1;
    }

    //sort logs
    logs.sort((a, b) => a[0] - b[0]);

    // Populate all disjoint sets.
    getAllDisjointSet();

    // Union and Find...
    return union_find();
};
module.exports = {earliestAcq}