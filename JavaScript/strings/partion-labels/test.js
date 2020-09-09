const {partitionLabels} = require('./index');

test("Partition Labels", () => {
    expect(partitionLabels("")).toBe(null);
    expect(partitionLabels("ababcbacadefegdehijhklij")).toMatchObject([9, 7, 8]);
});