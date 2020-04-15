function chunk(arr, size) {
    if (size >= arr.length) {
        return [arr]
    }
    let final = [];
    for (let item of arr) {
        let last = final[final.length - 1];
        if (last && last.length < size) {
            last.push(item);
        } else {
            final.push([item]);
        }
    }
    return final;
}

// using slice and with less amount of iteration
// iteration arr.length / size
function chunk(arr, size) {
    if (size >= arr.length) {
        return [arr];
    }

    let i = 0;
    let final = [];
    while (i < arr.length) {
        final.push(arr.slice(i, size + i));
        i = size + i;
    }
    return final;
}