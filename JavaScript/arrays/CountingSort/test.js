const {countingSort} = require('./index')

test("Counting Sort", () => {
    let ar = [1, 2, 9, 7, 6];
    let result = countingSort(ar);
    //console.log(result)
    expect(result).toMatchObject(ar.sort((a, b) => a - b))
});


test("Counting Sort", () => {
    let ar = [0, 1, 2, 2, 9, 7, 6, 10000];
    let result = countingSort(ar);
    //console.log(result)
    expect(result).toMatchObject(ar.sort((a, b) => a - b))
});

test("Counting sort using Version2", () => {
    const countingSortVersion2 = function (ar) {
        let max = Math.max(...ar);
        let mapping = new Array(max + 1).fill(0);
        for (let item of ar) {
            mapping[item]++;
        }

        for (let i = 1; i <= max; i++) {
            mapping[i] += mapping[i - 1];
        }
        //console.log("Mapping")
        //console.log(mapping);
        let temp = new Array(ar.length).fill(0);
        for (let i = ar.length - 1; i >= 0; i--) {
            temp[mapping[ar[i]] - 1] = ar[i];
            mapping[ar[i]]--;
        }
        //console.log(temp);
        return temp;
    };
    let ar = [0, 1, 2, 2, 9, 7, 6];
    let result = countingSortVersion2(ar);
    expect(result).toMatchObject(ar.sort((a, b) => a - b));
})