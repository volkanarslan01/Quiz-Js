//Data Set
const array = [
    {
        username : 'Volkan',
        team : 'red',
        score : 100,
        items : ['ball','book','pen']
    },
    {
        username : 'Becky',
        team : 'green',
        score : 200,
        items : ['ball','pen','tape']
    },
    ];
// 1 Question

array.forEach(element => {
    const newArray = [`${element.username} ! `];
});

// 2 Question

const mapArray = array.map(element => {
return `${element.username} ? `
});

//3 Question

const filterArray = array.filter(element => element.team === `red`);
// 4 Question

const reduceArray = array.reduce((prevision ,current) =>prevision.score + current.score);
console.log(reduceArray);