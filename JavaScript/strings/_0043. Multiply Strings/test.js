const {multiply, add} = require('./index')

test("Test Case 1: Adding Two String Number", () => {
    let result = multiply("2", "3");
    //console.log(result);
    expect(result).toBe("6");
    //let result = add("10009", "91");
    //console.log(result);
})

test("Test Case 2: Adding Two String Number", () => {
    let result = multiply("123", "456");
    //console.log(result);
    expect(result).toBe("56088");
    //let result = add("10009", "91");
    //console.log(result);
});


test("Test Case 3: Adding Two String Number", () => {
    let result = multiply("123", "0");
    console.log(result);
    expect(result).toBe("0");
    //let result = add("10009", "91");
    //console.log(result);
});


test("Test Case 4: Adding Two String Number", () => {
    let result = multiply("0", "123");
    console.log(result);
    expect(result).toBe("0");
    //let result = add("10009", "91");
    //console.log(result);
});


