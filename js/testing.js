//RUBEN JUAREZ PEREZ 2DAW


(function(){
  //CREACION DE OBJETOS PARA TESTING
  let student4 = new Student('Daniel','87654322D',new Date(),'bachelor',7.8);
  let student5 = new Student('Laura','22222222A',new Date(),'bachelor',7.9);
  let student3 = new Student('Marcos','11111111B',new Date(),'bachelor',6.5);
  let student1 = new Student('Ruben','12345678A',new Date(),'vocational',8.7);
  let student6 = new Student('Angel','33333333Z',new Date(),'vocational',7.7);
  let student2 = new Student('Carlos','87654322P',new Date(),'other',8);
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
  let course1 = new Course('DAW2',30,professor);
  console.log('- - - COMIENZO TESTING: PROPIEDADES COURSE  - - -');
  console.log('course.name -> Expected: DAW2 / Got: ' + course1.name);
  console.log('course.students -> Expected: 30 / Got: ' + course1.students);
  console.log('course.tutor -> Expected: 87654322P,Carmen,BIRTH_DATE  / Got: ' + course1.tutor);
  console.log('- - - COMIENZO TESTING: HIGHSCHOOL UNICO  - - -');
  let hs = highSchoolSingleton.getInstance('MaestreCalatrava');
  console.log()


  
})();