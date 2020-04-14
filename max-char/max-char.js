// storing each character count in an object
function maxChar(str) {
    str = str.replace(/ /g, '');
    let hash = {};
    for (let char of str) {
        hash[char] ? hash[char]++ : hash[char] = 1;
    }

    let max = '';
    count = 0;
    for (let key in hash) {
        if (hash[key] > count) {
            max = key;
            count = hash[key];
        }
    }
    return max;
}

console.log(maxChar('apple'))