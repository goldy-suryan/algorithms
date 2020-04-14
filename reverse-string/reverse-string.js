// using array build in reverse method
function reverseString(str) {
    return str.split('').reverse().join('');
}

// using array build in reduce method
function reverseStr(str) {
    return str.split('').reduce((prev, curr) => {
        prev = curr + prev;
        return prev;
    }, '')
}

// using for loop
function reverseSt(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    };
    return reversed;
}

// using for..of loop
function reverseS(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
console.log(reverseS('goldy'));