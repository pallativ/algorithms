const replaceWords = function (dictionary, sentence) {
    const TrieNode = function (char) {
        this.children = new Map();
        if (char)
            this.children.set(char, new TrieNode());
        this.isWord = false;
    }
    const buildTrie = function () {
        for (let word of dictionary) {
            insert(word);
        }
    }
    const insert = function (word) {
        let curr = root;
        for (let char of word) {
            if (!curr.children.has(char))
                curr.children.set(char, new TrieNode());
            curr = curr.children.get(char);
        }
        curr.isWord = true;
    }

    const getRootWord = function (word) {
        let curr = root;
        let rootWord = '';
        for (let char of word) {
            rootWord += char;
            curr = curr.children.get(char);
            if (!curr)
                return word;
            if (curr.isWord)
                return rootWord;
        }
        return curr.isWord ? rootWord : word;
    }

    const replace = function () {
        let words = sentence.split(' ');
        let result = [];
        for (let word of words) {
            result.push(getRootWord(word));
        }
        return result.join(' ');
    }
    let root = new TrieNode();
    buildTrie();
    return replace();
};

module.exports = {replaceWords}