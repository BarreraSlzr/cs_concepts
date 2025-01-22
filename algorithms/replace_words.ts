import { TrieNode } from '../trie';

function replaceWords(dictionary: string[], sentence: string): string {
    const trie = new TrieNode<string>();

    // Build the trie
    for (const word of dictionary) {
        let current = trie;
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode<string>());
            }
            current = current.children.get(char)!;
        }
        current.isEndOfWord = true;
    }

    // Replace words in the sentence
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        let current = trie;
        let replacement = '';
        for (const char of words[i]) {
            if (current.children.has(char)) {
                replacement += char;
                current = current.children.get(char)!;
                if (current.isEndOfWord) {
                    words[i] = replacement;
                    break;
                }
            } else {
                break;
            }
        }
    }

    return words.join(' ');
}

// Test case
const dictionary = ['cat', 'bat', 'rat'];
const sentence = 'the cattle was rattled by the battery';
console.log(replaceWords(dictionary, sentence)); // Output: 'the cat was rat by the bat'
