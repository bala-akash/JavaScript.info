class student {
  constructor(name, age, sex, rollno) {
    this.student_name = name;
    this.student_age = age;
    this.student_sex = sex;
    this.student_rollno = rollno;
  }
}

// student1 = new student("Akash", 23, "Male", "ESPL0210");
// student2 = new student("Pavi", 27, "Male", "ESPL0213");
// student3 = new student("Vasi", 25, "Male", "ESPL0220");
// student4 = new student("subi", 23, "Female", "ESPL0290");

// console.log(student1.name); //Akash
// console.log(student2.age); //27
// console.log(student3.rollno); //ESPL0220
// console.log(student4.sex); //Female

//Superkeyword

class school extends student {
  constructor(name, student_name, student_age, student_sex, student_rollno) {
    super(student_name, student_age, student_sex, student_rollno); //calls a constructor function from the class students
    this.school_name = name;
  }
  print() {
    return this.student_name + " studies in " + this.school_name + " School ";
  }
}
school1 = new school("Hilton", "Akash", 23, "Male", 8555);
school2 = new school("Bharath", "Pavi", 20, "Male", 7855);
console.log(school1.school_name); //Hilton
console.log(school1.student_name); //Akash
console.log(school1.student_age); //23
console.log(school1.student_sex); //Male
console.log(school1.student_rollno); //8555
console.log(school2.school_name); //Bharath
console.log(school2.student_name); //Pavi
console.log(school2.student_age); //20
console.log(school2.student_sex); //Male
console.log(school2.student_rollno); //7855

console.log(school1.print());
console.log(school2.print());
