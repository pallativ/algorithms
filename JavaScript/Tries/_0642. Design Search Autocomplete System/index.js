const AutocompleteSystem = function (sentences, times) {

    /// TrieNode....
    const TrieNode = function (char, score) {
        this.children = new Map();
        if (char)
            this.children.set(char, new TrieNode());
        this.score = score ? score : 0;
    }

    // Building Trie.
    this.buildTrie = function () {
        for (let s of sentences) {
            this.insert((s));
        }
    }

    // Inserting Sentence and Score.
    this.insert = function (sentence, score) {
        let curr = this.root;
        for (let char of sentence) {
            if (!curr.children.has(char))
                curr.children.set(char, new TrieNode());
            curr.children.get(char).score += score;
            curr = curr.children.get(char);
        }
    }

    this.search = function (sentence) {
        let curr = this.root;
        for (let char of this.sentence) {
            if (!curr.children.has(char))
                return null;
            curr = curr.children.get(char);
        }
        return curr.children;
    }

    this.getResultsByScore = function (map) {

    }

    this.root = new TrieNode();
    this.buildTrie();
    this.sentence = '';
};

AutocompleteSystem.prototype.input = function (c) {

    this.sentence += c;

    if (c === '#') {
        this.insert(this.sentence, 1);
        this.sentence = '';
    }
};