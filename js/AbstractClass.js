//RUBEN JUAREZ PEREZ 2DAW
'use strict';

(function(){
  let abstractCreateLock = true;

  window.VALID_DEGREES = {
    'bachelor' : true,
    'vocational' : true,
    'other' : true,
  }
  /**
   * Esta clase sera la padre de Student y de Professor, como es una clase abstracta esta no se podra instanciar,
   * para hacer esto nos ayudaremos de la variable abstractCreateLock, con la cual comprobamos si se permite o no acceder al constructor,
   * por defecto esta en true para que no deje acceder y lance una excepcion
   * @param {*} name Nombre persona
   * @param {*} dni Dni persona(8Numeros1Letra)
   * @param {*} birth Fecha nacimiento como Date
   */
  function Person(name,dni,birth){
    if(abstractCreateLock) throw new AbstractClassException('Person');
    abstractCreateLock = true;

    let regexDni = /^[0-9]{8}[A-Z]$/i;
    
    if(!name) throw new EmptyValueException('name');
    this.name = name;
    if(!dni) throw new EmptyValueException('dni');
    if(!regexDni.test(dni)) throw new Error('Invalid dni');
    this.dni = dni;
    if(!birth) throw new InvalidRegexException('dni');
    if(!(birth instanceof Date)) throw new InvalidInstanceException('birth', birth);
    this.birth = birth;

    this.toString = ()=>{
      return this.dni + ' ::: ' + this.name + ' ::: ' + this.birth;
    }
  }
  /**
   * Esta clase hereda de Person, para que pueda acceder correctamente justo antes de hacer la llamada al constructor del padre
   * cambiamos el valor de la Lock a false, de forma que se salta la excepcion de no creacion por abstracta de forma que creara
   * lo necesario y ademas volvemos a colocar la lock a true
   * @param {*} name Nombre persona
   * @param {*} dni Dni persona(8Numeros1Letra)
   * @param {*} birth Fecha nacimiento como Date
   * @param {*} degree Estudios(bachelor,vocational,other)
   * @param {*} grade Nota 0 a 10
   */
  function Student(name,dni,birth,degree,grade){
    if(!(this instanceof Student)) throw new InvalidAccessConstructorException();
    abstractCreateLock = false;
    Person.call(this,name,dni,birth);
    if(!degree) throw new EmptyValueException('degree');
    if(!VALID_DEGREES[degree]) throw new InvalidValueException('degree', degree);
    this.degree = degree;
    if(!grade) throw new EmptyValueException('grade');;
    if(grade < 0 || grade > 10) throw new IndexOutOfBoundsException();
    this.grade = grade;

    let oldToString = this.toString;
    this.toString = ()=>{
      return oldToString.call(this,name,dni,birth) + ' ::: ' + this.degree + ' ::: ' + this.grade;
    }
  }
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  /**
   * Funciona exactamente igual que Student
   * @param {*} name Nombre persona
   * @param {*} dni Dni persona(8Numeros1Letra)
   * @param {*} birth Fecha nacimiento como Date
   */
  function Professor(name,dni,birth){
    if(!(this instanceof Professor)) throw new InvalidAccessConstructorException();
    abstractCreateLock = false;
    Person.call(this,name,dni,birth);
  }
  Professor.prototype = Object.create(Person.prototype);
  Professor.prototype.constructor = Professor;


  abstractCreateLock=true;
  //Pasamos los objetos al objeto ventana para que sea acessible ya que esta clase esta creada usando IIFE
  window.Person = Person;
  window.Student = Student;
  window.Professor = Professor;
})();