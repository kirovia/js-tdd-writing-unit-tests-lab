export function isPalindrome(word) {
    if (word.length > 0) {
        let backwards = []
        for (const char in word) {
            backwards.unshift(word[char])
        }
        return backwards.join('').toLowerCase() === word.toLowerCase()
    } else {
        return false
    }
}