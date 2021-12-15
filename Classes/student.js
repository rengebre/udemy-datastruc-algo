class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }

  static enrollStudents(...students) {
    console.log("ENROLLING STUDENTS");  
  }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

console.log(firstStudent.fullName());
console.log(secondStudent.markLate());

Student.enrollStudents();