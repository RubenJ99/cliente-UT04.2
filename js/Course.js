//RUBEN JUAREZ PEREZ 2DAW
"use strict";
/**
 * Esta clase crea los cursos, contiene un metodo doApplication que añade a los estudiantes a sus listas y los ordena por nota,
 * luego tenemos la propiedad admittedStudents que es un getter el cual retorna un objeto iterador con los alumnos admitidos dados
 * los porcentajes 
 * @param {*} name Nombre del curso
 * @param {*} students Cantidad maxima de estudiantes en el curso
 * @param {*} tutor Objeto Professor
 */
function Course(name, students, tutor) {
  if (!(this instanceof Course)) throw new InvalidAccessConstructorException();
  if (!name) throw new EmptyValueException('name');
  this.name = name;
  if (!students) throw new EmptyValueException('students');
  if (students < 0) throw new IndexOutOfBoundsException();
  this.students = students;
  if (!tutor) throw new EmptyValueException('tutor');
  if (!(tutor instanceof Professor)) throw new InvalidInstanceException('tutor', tutor);
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
  /**
   * Aqui creo un array en el que alamaceno los estudiantes admitidos usando como limite el % correspondiente
   */
  Object.defineProperty(this,'admittedStudents',{
      get:() => {
          let admittedList = [];
          for(let i=0;i<_bachelorList.size();i++){
            admittedList.push(_bachelorList.get(i));
            if(i === fortyPercent) break;
          }
          for(let i=0;i<_vocationalList.size();i++){
            admittedList.push(_vocationalList.get(i));
            if(i === fortyPercent) break;
          } 
          for(let i=0;i<_othersList.size();i++){
            admittedList.push(_othersList.get(i));
            if(i === twentyPercent) break;
          } 

          let nextIndex = 0;
          return {
              next: () => {
                  return nextIndex <  admittedList.length ? {value: admittedList[nextIndex++],done:false} : {done: true};
              },
          }
      }
  });

  this.doApplication = (student) => {
    if (!(student instanceof Student))
      throw new InvalidInstanceException("student", Student);
    if (!window.VALID_DEGREES[student.degree]) throw new InvalidValueException('degree', student.degree);

    if (student.degree === "bachelor")
      if (_bachelorList.indexOf(student) === -1) _bachelorList.add(student);
      else throw new RepeatedArgumentException('student');
    if (student.degree === "vocational")
      if (_vocationalList.indexOf(student) === -1) _vocationalList.add(student);
      else throw new RepeatedArgumentException('student');
    if (student.degree === "others")
      if (_othersList.indexOf(student) === -1) _othersList.add(student);
      else throw new RepeatedArgumentException('student');
  };
}
