"use strict";

function Course(name, students, tutor) {
  if (!(this instanceof Course)) throw new InvalidAccessConstructorException();
  if (!name) throw new Error("empty value");
  this.name = name;
  if (!students) throw new Error("Empty value");
  if (students < 0) throw new Error("Invalid grade");
  this.students = students;
  if (!tutor) throw new Error("Empty value");
  if (!(tutor instanceof Professor)) throw new Error("invalid professor");
  this.tutor = tutor;

  let _bachelorList = new OrderedObjectList(Student, (a, b) => {
    return a.grade - b.grade;
  });
  let _vocationalList = new OrderedObjectList(Student, (a, b) => {
    return a.grade - b.grade;
  });
  let _othersList = new OrderedObjectList(Student, (a, b) => {
    return a.grade - b.grade;
  });

  let fortyPercent = (this.students) * 0.4;
  let twentyPercent = (this.students) * 0.2; 

  Object.defineProperty(this,'admittedStudents',{
      get:() => {
          let admittedList = [];
          for(let i=0;i<fortyPercent;i++) admittedList.push(_bachelorList[i]);
          for(let i=0;i<fortyPercent;i++) admittedList.push(_vocationalList[i]);
          for(let i=0;i<twentyPercent;i++) admittedList.push(_othersList[i]);


          let nextIndex = 0;
          return {
              next: () => {
                  return nextIndex <  admittedList.length ? {value: admittedList[nextIndex++],done:false} : {done: true};
              }
          }
      }
  });

  this.doApplication = (student) => {
    if (!(student instanceof Student))
      throw new InvalidInstanceException("student", Student);
    if (!window.VALID_DEGREES[student.degree]) throw new Error("Invalid degree");

    if (student.degree === "bachelor")
      if (_bachelorList.indexOf(student) === -1) _bachelorList.add(student);
      else throw new Error("Student already in list");
    if (student.degree === "vocational")
      if (_vocationalList.indexOf(student) === -1) _vocationalList.add(student);
      else throw new Error("Student already in list");
    if (student.degree === "others")
      if (_othersList.indexOf(student) === -1) _othersList.add(student);
      else throw new Error("Student already in list");
    
    return;
  };
}
