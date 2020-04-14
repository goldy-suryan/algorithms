// Converting int to string, reversing it and converting back to int
function reverseInt(int) {
    let sign = Math.sign(int);
    int = int < 0 ? int * -1 : int;
    return sign * +(int.toString().split('').reverse().join(''));
}

// without converting number to string
function reverseInt(int) {
    let sign = Math.sign(int);
    int = int < 0 ? int * -1 : int;
    let reversed = 0;
    while (int > 0) {
        reversed = (reversed * 10) + (int % 10);
        int = Math.floor(int / 10);
    }
    return sign * reversed;
}

console.log(reverseInt(-1034))