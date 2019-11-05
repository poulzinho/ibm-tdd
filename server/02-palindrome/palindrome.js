const isPalindrome = (phrase) => phrase.trim() === ''
    ? false
    : phrase === phrase.split('').reverse().join('');

module.exports = {isPalindrome};