const {convertToTitle} = require('./index')
test("convert", () => {
    let n = 701;
    for (; n < 726; n++)
        console.log("N:" + n + "->" + convertToTitle(n));

});
// test("convert", () => {
//     console.log(convertToTitle(702));
// })