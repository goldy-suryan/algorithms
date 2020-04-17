function steps(num) {
    for (let i = 0; i < num; i++) {
        let result = '';
        for (let j = 0; j < num; j++) {
            if (i >= j) {
                result += '*';
            } else {
                result += ' ';
            }
        }
        console.log(result);
    }
}