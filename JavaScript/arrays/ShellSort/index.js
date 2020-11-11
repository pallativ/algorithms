const shellSort = function (ar) {
    let gap = Math.floor(ar.length / 2), i, j;
    for (; gap >= 1; gap = Math.floor(gap / 2)) {
        for (i = gap; i < ar.length; i++) {
            let temp = ar[i]
            j = i - gap;
            while (j >= 0 && ar[j] > temp) {
                ar[j + gap] = ar[j];
                j = j - gap;
            }
            ar[j + gap] = temp;
            //console.log(ar);
        }
    }
    return [...ar];
}
module.exports = {shellSort}