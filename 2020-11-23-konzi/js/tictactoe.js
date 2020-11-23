const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const matrix = [
    ['O', 'O', 'X'],
    ['', '', ''],
    ['', '', ''],
];                              // ha egy sorban, vagy egy oszlopban, vagy átlósan 3 egyforma elem van akkor win

// console.log(matrix[2][1]);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);

    }

}

// matrix.filter(item => /*...*/)