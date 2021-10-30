/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    // Create a set of the wordList so it is constant time to check if a word is in the set.
    let wordSet = new Set(wordList);
    // Situation where we don't need to check as the end word isn't there.
    if (!wordSet.has(endWord)) return 0;

    // Begin a queue of words to check.
    let wordQueue = [beginWord];
    // Amount of words required for transformation.
    let transLen = 1;
    while (wordQueue.length) {
        // Must make at least on change so we always increment this.
        transLen++;
        // We set the size so that as it changes from removing words from the queue the loop doesn't break.
        let qSize = wordQueue.length;
        for (let i=0; i<qSize; i++) {
            // Set the first item in the queue as the current word to work with, loop over every letter.
            let currWord = wordQueue.pop();
            for (let j=0; j<currWord.length; j++) {
                let wordArr = currWord.split('');
                // Check all letters in the alphabet at every position.
                for (let k=97; k<123; k++) {
                    if (wordArr[j].charCodeAt(0) === k) continue;
                    wordArr[j] = String.fromCharCode(k);
                    const newWord = wordArr.join('');
                    // If the word is now the end word return the amount of words it took.
                    if (newWord === endWord) return transLen;
                    // Otherwise if it exists in the set add it to the back of the queue and delete it from the set.
                    if (wordSet.has(newWord)) {
                        wordQueue.unshift(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
    }
    // If we get out of the loop no path exists.
    return 0;
};

console.log(ladderLength("hit", "cog", ["hot", "tot", "tat", "tag", "log", "lag", "bag", "cog"]));