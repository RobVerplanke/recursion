function fibs(number) {
    let result = [0,1];

    for (let i = 2; i < number; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    
    return result;
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
