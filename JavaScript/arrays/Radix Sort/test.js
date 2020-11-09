const {radixSortUsingLSD, radixSortUsingMSD} = require('./index')
const {radixStringSorting, radixStringSortingWithExtraSpace} = require('./StringSorting')


test("Testing Radix Sorting using LSD", () => {
    let ar = [9, 8, 7, 6, 5, 4, 3, 3, 3, 2, 1];
    let result = radixSortUsingLSD(ar);
    expect(result).toMatchObject(ar.sort(((a, b) => a - b)));
});


test("Testing Radix Sorting using LSD using two digits", () => {
    let ar = [98, 86, 77, 66];
    let result = radixSortUsingLSD(ar);
    expect(result).toMatchObject(ar.sort(((a, b) => a - b)));
});

test("Testing Radix Sorting using LSD using 3 digits", () => {
    let ar = [980, 980, 860, 770, 660];
    let result = radixSortUsingLSD(ar);
    expect(result).toMatchObject(ar.sort(((a, b) => a - b)));
});


test("Sorting of String", () => {
    let ar = ["eg", "eh", "ee", "eb", "ea", "ec", "ca", "da", "aa", "aa"];
    let result = radixStringSortingWithExtraSpace(ar);
    expect(result).toMatchObject(ar.sort((a, b) => a.localeCompare(b)));
});