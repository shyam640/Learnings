// Creating object using shorthand :
const name = 'shyam';
const userAge = '18';
const user = {
   name,
   age : userAge,
   location : 'Gwalior'
}
console.log(user);
// when we have variable and property name same then we can write directly.


// Destructuring object :
const student = {
   name : 'shyam',
   age : 18,
   type : 'coder',
   star : 3
}
// Accessing object properties
// Use this:-
// const age = student.age;
// const star = student.age;
// or
// const {age, star} = student;

// More methods
const {name:userName,age,star=4} = student;
console.log(userName);
console.log(age);
console.log(star);

const stu = (level , {type , star}) => {
   console.log(level , type , star)
}
stu('coder & programmer',student);