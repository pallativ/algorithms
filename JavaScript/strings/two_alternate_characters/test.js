const { alternate } = require('./index')


test("Testing Two Characters", () =>{
    expect(alternate("abc")).toBe(2)
    expect(alternate("beabeefeab")).toBe(5)    
})