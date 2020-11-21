const {SimpleTable} = require('./index')

test("Test - put", () => {
    let ST = new SimpleTable();
    ST.put("A", 1);
    ST.put("B", 2);
    ST.put("C", 3);
    //ST.print();

    expect(ST.get("A")).toBe(1);
    expect(ST.get("B")).toBe(2);
    expect(ST.get("C")).toBe(3);
});

test("Test - Delete", () => {
    let ST = new SimpleTable();
    ST.put("A", 1);
    expect(ST.size()).toBe(1);
    ST.put("B", 1);
    expect(ST.get("A")).toBe(1);
    ST.delete("A");
    expect(ST.get("A")).toBe(null);
    expect(ST.size()).toBe(1);
})