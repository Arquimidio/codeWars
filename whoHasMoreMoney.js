/*
You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money
*/

function mostMoney(students) {
  const sumCash = student => student.fives * 5 + student.tens * 10 + student.twenties * 20;
  const firstStudentCash = sumCash(students[0])
  const getMostCash = (acc, cur) => sumCash(cur) > acc[1]? [cur.name, sumCash(cur)] : acc;
  const allSameAmount = students.every(student => sumCash(student) === firstStudentCash) && students.length > 1
  return allSameAmount? 'all' : students.reduce(getMostCash, [students[0].name, firstStudentCash])[0]
}