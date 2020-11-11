/**
 * Initialize your data structure here.
 */
var TrieNode = function(char, score){
    this.children = new Map();
    if(char !== undefined)
        this.children.set(char, new TrieNode());
    this.score = score ? score : 0;
}
var MapSum = function() {
    this.map = new Map();
    this.root = new TrieNode();
    console.log(this.root);
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let delta = val - (this.map.get(key) | 0);
    this.map.set(key, val);
    let curr = this.root;
    curr.score += delta;

    for(let char of key){
        if(!curr.children.has(char))
            curr.children.set(char, new TrieNode())
        curr = curr.children.get(char);
        curr.score += delta;
        // console.log(curr);
    }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let curr = this.root;
    for(let char of prefix){
        curr = curr.children.get(char);
        if(!curr) return 0;
    }
    return curr.score;

};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */