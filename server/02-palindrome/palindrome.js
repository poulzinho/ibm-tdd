const isPalindrome = (phrase) => {
    if (phrase === '')
        throw new Error('empty strings are not palindromes');
    if (typeof phrase !== 'string')
        throw new Error('input must be a string');
    return phrase.trim() === ''
        ? false
        : phrase === phrase.split('').reverse().join('')
};

module.exports = {isPalindrome};