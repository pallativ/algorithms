/**
 * Initialize your data structure here.
 */
function TrieNode(char, endOfWord, node){
    this.children = new Map();
    if(char !== null)
        this.children.set(char, node);
    this.endOfWord = endOfWord ? endOfWord: false;
}

var Trie = function() {
    this.root = new TrieNode();
    //console.log("Constructor");
    //console.log(this.root.children)
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    for(let char of word){
        //console.log(char);
        let item = curr.children.get(char);
        if(!item){
            curr.children.set(char, new TrieNode());
            item = curr.children.get(char);
        }
        curr = item;
        //console.log(curr);
    }
    curr.endOfWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    for(let char of word){
        let item = curr.children.get(char);
        if(!item)
            return false;
        curr = item;
    }
    console.log(curr);
    return curr && curr.endOfWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    for(let char of prefix){
        let item = curr.children.get(char);
        if(!item) return false;
        curr = item;
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */