// model of student
// const student1 = {
//   id: 1,
//   name: 'Reed',
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   },
// };

// student1.addSubject('Math');
// console.log(student1.subjects);

// Make use of Class a Student Class

// Constructor funtion
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

// Instance of the Student Class
const pascal = new Student(1, 'Pascal');
console.log(pascal);

Student.prototype.addSubject = function (subject) {
  this.subjects = [...this.subjects, subject];
};

pascal.addSubject('Math');
pascal.addSubject('french');
console.log(pascal);

Student.prototype.removeSubject = function (subject) {
  const subjectIndex = this.subjects.indexOf(subject);
  this.subjects = [
    ...this.subjects.slice(0, subjectIndex),
    ...this.subjects.slice(subjectIndex + 1),
  ];
};

pascal.removeSubject('Math');
console.log(pascal);
