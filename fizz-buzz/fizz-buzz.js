function fizzBuzz(arr) {
    for (let item of arr) {
        if (item % 5 == 0) {
            console.log('fizzBuzz');
        } else if (item % 2 == 0) {
            console.log('fizz')
        } else if (item % 3 == 0) {
            console.log('Buzz')
        } else {
            console.log(item);
        }
    }
}

// fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])