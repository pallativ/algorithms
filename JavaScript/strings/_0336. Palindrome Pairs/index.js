const naiveApproach = function (words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i === j) continue;
            let p = words[i] + words[j];
            if (p === p.reverse())
                result.push([i, j]);
        }
    }
    return result;
};