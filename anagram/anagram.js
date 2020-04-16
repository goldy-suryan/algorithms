// iterative way
function anagram(str, str2) {
    let firstStrObj = charMap(str);
    let secondStrObj = charMap(str2);

    if (Object.keys(firstStrObj).length !== Object.keys(secondStrObj).length) {
        return false;
    }

    for (let key in firstStrObj) {
        if (firstStrObj[key] != secondStrObj[key]) {
            return false;
        }
    }
    return true;
}

// Helper function
function charMap(str) {
    let strMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        strMap[char] = strMap[char]++ || 1;
    }
    return strMap;
}

// sorting and comparing both strings
function anagram(str1, str2) {
    return str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') ==
        str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagram('goldy', 'ydolg'));