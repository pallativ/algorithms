const {lexicalOrder} = require('./index')
test("Generating Lexical Order", () => {
    let result = lexicalOrder(21);
    console.log(result.join(","));
})