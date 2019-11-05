const isPalindrome = (phrase) => {
    if (phrase === '') {
        throw new Error('empty strings are not palindromes');
    }
    return phrase.trim() === ''
        ? false
        : phrase === phrase.split('').reverse().join('')
};

module.exports = {isPalindrome};