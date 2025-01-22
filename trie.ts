class TrieNode<T> {
    children: Map<T, TrieNode<T>>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie<T> {
    root: TrieNode<T>;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: T[]) {
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
        }
        current.isEndOfWord = true;
    }

    search(word: T[]): boolean {
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char)!;
        }
        return current.isEndOfWord;
    }

    startsWith(prefix: T[]): boolean {
        let current = this.root;
        for (const char of prefix) {
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char)!;
        }
        return true;
    }
}

// Example usage:
const trie = new Trie<string>();
trie.insert("apple".split(''));
console.log(trie.search("apple".split(''))); // true
console.log(trie.search("app".split(''))); // false
console.log(trie.startsWith("app".split(''))); // true
