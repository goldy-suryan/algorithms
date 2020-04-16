// Chaining method
// converting string to array
function capitalize(str) {
    return str.toLowerCase().split(' ').map(item => {
        return item[0].toUpperCase() + item.substring(1, item.length);
    }).join(' ');
}

// checking for spaces in string
function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] == ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }
    return result;
}