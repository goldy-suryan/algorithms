// basics from string reversal
function palindrome(str) {
    return str.split('').reverse().join('') == str;
}

// checking each character with corresponding character from last
function palindrome(str) {
    let strLen = str.length;
    let isPalindrome = false;
    for (let i = 0; i <= Math.floor(strLen / 2); i++) {
        if (str[i] == str[str.length - 1 - i]) {
            isPalindrome = true;
        } else {
            return isPalindrome = false;
        }
    }
    return isPalindrome;
}

// Using build in array every method
// Not an ideal solution as complaring double the times as it should
function palindrome(str) {
    let strLen = str.length;
    return str.split('').every((char, idx) => {
        return char == str[strLen - 1 - idx]
    })
}