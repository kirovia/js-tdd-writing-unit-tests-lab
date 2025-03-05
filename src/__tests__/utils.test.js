import { isPalindrome } from "../utils";

describe('isPalindrome', () => {

    it('returns true if the word is a palindrome', () => {
        const word = 'racecar'
        const bool = isPalindrome(word)
        expect(bool).toBe(true)
    })

    it('returns false is the word is NOT a palindrome', () => {
        const word = 'tree'
        const bool = isPalindrome(word)
        expect(bool).toBe(false)
    })

    it('returns true if the word is a palindrome with uppercase and lowercase letters', () => {
        const word = 'rAceCar'
        const bool = isPalindrome(word)
        expect(bool).toBe(true)
    })

    it('returns false if the string is empty', () => {
        const word = ''
        const bool = isPalindrome(word)
        expect(bool).toBe(false)
    })
})