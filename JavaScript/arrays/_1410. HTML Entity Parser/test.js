const {entityParser} = require('./index');

test("Html Parser - Case 1", () => {
    let result = entityParser("&amp; is an HTML entity but &ambassador; is not.");
    //console.log(result);
    expect(result).toBe("& is an HTML entity but &ambassador; is not.");
});

test("Html Parser - Case 2", () => {
    let result = entityParser("and I quote: &quot;...&quot;");
    //console.log(result);
    expect(result).toBe("and I quote: \"...\"");
});

test("Html Parser - Case 3", () => {
    let result = entityParser("Stay home! Practice on Leetcode :)");
    //console.log(result);
    expect(result).toBe("Stay home! Practice on Leetcode :)");
});

test("Html Parser - Case 4", () => {
    let result = entityParser("x &gt; y &amp;&amp; x &lt; y is always false");
    //console.log(result);
    expect(result).toBe("x > y && x < y is always false");
});

test("Html Parser - Case 5", () => {
    let result = entityParser("leetcode.com&frasl;problemset&frasl;all");
    //console.log(result);
    expect(result).toBe("leetcode.com/problemset/all");
});