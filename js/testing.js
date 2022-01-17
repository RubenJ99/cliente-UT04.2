//RUBEN JUAREZ PEREZ 2DAW


(function(){
  //CREACION DE OBJETOS PARA TESTING
  let student1 = new Student('Daniel','87654322D',new Date(),'bachelor',7.8);
  let student2 = new Student('Laura','22222222A',new Date(),'bachelor',7.9);
  let student3 = new Student('Marcos','11111111B',new Date(),'bachelor',6.5);
  let student4 = new Student('Ruben','12345678A',new Date(),'vocational',8.7);
  let student5 = new Student('Angel','33333333Z',new Date(),'vocational',7.7);
  let student6 = new Student('Carlos','87654322P',new Date(),'other',8);
  let student7 = new Student('Blas','87659022P',new Date(),'vocational',9);
  let student8 = new Student('Maite','87654322H',new Date(),'other',7);
  let professor = new Professor('Carmen','87654322P',new Date());
  console.log('TENEMOS 6 ESTUDIANTES Y 1 PROFESOR \n usaremos el metodo toString para visualizar de una todas las propiedades'+
  'que ademas son publicas');
  console.log('- - - COMIENZO TESTING: PROPIEDADES STUDENT - - -');
  console.log(student1.toString());
  console.log(student2.toString());
  console.log(student3.toString());
  console.log(student4.toString());
  console.log(student5.toString());
  console.log(student6.toString());
  console.log('- - - COMIENZO TESTING: PROPIEDADES PROFESSOR - - -');
  console.log(professor.toString());
  console.log('- - - COMIENZO TESTING: ERROR INSTANCIA PERSON - - -');
  try {
    let personInst = new Person('Clara','12345628C',new Date());
  } catch (error) {
    console.error(error.message)    
  }
  let course1 = new Course('DAW2',10,professor);
  let course2 = new Course('ASIR1',30,professor);
  let course3 = new Course('DAW1',30,professor);
  let course4 = new Course('DAM2',30,professor);
  console.log('- - - COMIENZO TESTING: PROPIEDADES COURSE  - - -');
  console.log('course.name -> Expected: DAW2 / Got: ' + course1.name);
  console.log('course.students -> Expected: 30 / Got: ' + course1.students);
  console.log('course.tutor -> Expected: 87654322P,Carmen,BIRTH_DATE  / Got: ' + course1.tutor);
  console.log('- - - COMIENZO TESTING: HIGHSCHOOL UNICO  - - -');
  let hs = highSchoolSingleton.getInstance('MaestreCalatrava');
  let hs2 = highSchoolSingleton.getInstance('MaestreCalatrava');
  console.log('Comparacion hs - hs2: Expected: true / Got: ' + hs === hs2);
  console.log('- - - COMIENZO TESTING: ASIGNAR NUEVO TUTOR A COURSE  - - -');
  let professor2 = new Professor('Pablo','18181899A',new Date());
  console.log('Asignamos un nuevo tutor, como el campo es publico y no se especifica lo contrario lo hacemos como course');
  course1.tutor = professor2;
  console.log('Comprobamos nuevo profesor -> Expected: Pablo / Got: ' + course1.tutor.name);
  console.log('- - - COMIENZO TESTING: ERROR AÑADIR 2 CURSOS IDENTICOS A HIGHSCHOOL  - - -');
  try{
    hs.addCourse(course1);
    hs.addCourse(course2);
    hs.addCourse(course3);
    hs.addCourse(course4);
    hs.addCourse(course1);
  }catch(error){
    console.error(error.message);
  }
  console.log('- - - COMIENZO TESTING: BORRAR CURSO DE HIGHSCHOOL  - - -');
  console.log('Curso borrado -> Expected: Objeto DAW2 como String / Got: ' + hs.removeCourse(course1));
  console.log('- - - COMIENZO TESTING: RECORRER CURSOS EN HIGHSCHOOL  - - -');
  let str = "";
  try {
    let iter = hs.courses();
    let courseFromIter = iter.next();
    while(!courseFromIter.done){
      str += JSON.stringify(courseFromIter.value) + " ::: ";
      courseFromIter = iter.next();
   }
  } catch (error) {
    console.error(error.message);
  }
 console.log('Comprobamos contenido HighSchool con iterator -> Expected: Datos cursos(ASIR1,DAM2,DAW1) / Got: ' + str);
 console.log('- - - COMIENZO TESTING: AÑADIR ALUMNOS CON doApplication()  - - -');
 console.log('Añadimos todos los estudiantes generados al principio del testing a course1');
 course1.doApplication(student1);
 course1.doApplication(student2);
 course1.doApplication(student3);
 course1.doApplication(student4);
 course1.doApplication(student5);
 course1.doApplication(student6);
 try {
   console.log('- - - ERROR ESTUDIANTE REPETIDO - - -');
   course1.doApplication(student1);
 } catch (error) {
   console.error(error.message);
 }
 console.log('- - - COMIENZO TESTING: RECORRER ALUMNOS ACEPTADOS EN EL CURSO');
 str = "";
 try {
  let iter = course1.admittedStudents;
  let addmitedStudents = iter.next();
  while(!addmitedStudents.done){
    str += JSON.stringify(addmitedStudents.value) + " ::: ";
    addmitedStudents = iter.next();
 }
} catch (error) {
  console.error(error.message);
}
console.log('Comprobamos los alumnos admitidos en el curso con iterator -> Expected: Datos de (Marcos,Laura) / Got: ' + str);
})();