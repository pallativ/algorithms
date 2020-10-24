const {leadsToDestination} = require("./index");

test("edges = [[0, 1], [1, 1], [1, 2]]", () => {
    expect(leadsToDestination(3, [[0, 1], [1, 1], [1, 2]], 0, 2)).toBe(false);
})

test("edges = [[0,1],[1,1]]", () => {
    expect(leadsToDestination(2, [[0,1],[1,1]], 0, 1)).toBe(false);
})

test("edges = [[0,1],[0,2]]", () => {
    expect(leadsToDestination(3, [[0,1],[0,2]], 0, 2)).toBe(false);
})


test("edges = [[0,1],[0,3],[1,2],[2,1]]", () => {
    expect(leadsToDestination(4, [[0,1],[0,3],[1,2],[2,1]], 0, 3)).toBe(false);
})

test("edges = [[0,1],[0,2],[1,3],[2,3]]", () => {
    expect(leadsToDestination(4, [[0,1],[0,2],[1,3],[2,3]], 0, 3)).toBe(true);
})


test("edges = [[0,1],[0,2],[1,3],[2,3]]", () => {
    expect(leadsToDestination(5, [[0,1],[0,2],[0,3],[0,3],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]], 0, 4)).toBe(true);
})
