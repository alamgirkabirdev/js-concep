const numbers = [89, 45, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 45,
    movies: ['king khan', 'Dhakar Mastan']
}

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${student[2]} also liked movies ${student.movies[0]}`;
console.log(about)

// 2. arrow function
const getFiftyFive = () => 56;
const addSixtyFive = num => num + 65;
const isEven = x = x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath =( num1, num2) => {
     const sum = num1 + num2;
        return sum;
}
   


// spread operator
const newNumbers = [...numbers];

numbers.push(99);
