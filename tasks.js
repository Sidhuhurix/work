const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];

// Task 1 Print all names
const names = scores.map(score => score.name);

console.log(names);

// Task 2 Print passed students
const pass = scores.filter(score => score.marks >= 40);

console.log(pass);

// Task 3 Print failed students
const fail = scores.filter(score => score.marks < 40);

console.log(fail);

// Task 4 Print average mark

const total = scores.reduce((acc, score) => acc + score.marks, 0);
const averageMark = total / scores.length;

console.log(averageMark);


