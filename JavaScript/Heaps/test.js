const {sortArray} = require("./index")
test("Sort Using Heap", ()=>{
   let actual = sortArray([5,56,234,34,45,56]);
   expect(actual).toMatchObject([5,34,45,56,56,234]);
    actual = sortArray([5,2,3,1]);
    expect(actual).toMatchObject([1,2,3,5]);
    actual = sortArray([5,1,1,2,0,0]);
    expect(actual).toMatchObject([0,0,1,1,2,5]);
});