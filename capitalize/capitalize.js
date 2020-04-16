// Chaining method
// converting string to array
function capitalize(str) {
    return str.toLowerCase().split(' ').map(item => {
        return item[0].toUpperCase() + item.substring(1, item.length);
    }).join(' ');
}

console.log(capitalize('goldy suryan, just do your work'));