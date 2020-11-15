const {OrderedStream} = require('./index');

test("Ordered System", () => {
    let os = new OrderedStream(5);
    expect(os.insert(3, "ccccc")).toMatchObject([]); // Inserts (3, "ccccc"), returns [].
    expect(os.insert(1, "aaaaa")).toMatchObject(["aaaaa"]); // Inserts (1, "aaaaa"), returns ["aaaaa"].
    expect(os.insert(2, "bbbbb")).toMatchObject(["bbbbb", "ccccc"]); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
    expect(os.insert(5, "eeeee")).toMatchObject([]); // Inserts (5, "eeeee"), returns [].
    expect(os.insert(4, "ddddd")).toMatchObject(["ddddd", "eeeee"]); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
})