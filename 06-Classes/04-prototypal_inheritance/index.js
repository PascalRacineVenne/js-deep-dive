// classes === constructor functions

// function Student() {}
// classes are mearly function

class Student {
  constructor(id, name, subjects = []) {
    (this.id = id), (this.name = name), (this.subjects = subjects);
  }

  getStudentName() {
    return `Student: ${this.name}`;
  }

  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  }
}

const student1 = new Student(1, 'Arthur');
console.log(student1);

student1.addSubject('gym');
console.log(student1.getStudentName());
