'use strict';

(function(){
  let abstractCreateLock = true;

  function Person(name,dni,birth){
    if(abstractCreateLock) throw new AbstractClassException('Person');
    abstractCreateLock = true;

    let regexDni = /^[0-9]{8}[A-Z]$/i;
    
    if(!name) throw new Error('empty value');
    this.name = name;
    if(!dni) throw new Error('Empty value')
    if(!regexDni.test(dni)) throw new Error('Invalid dni');
    this.dni = dni;
    if(!birth) throw new Error('Empty value');
    if(!(birth instanceof Date)) throw new Error('Invalid birthdate');
    this.birth = birth;

    this.toString = ()=>{
      return this.dni + ' ::: ' + this.name + ' ::: ' + this.birth;
    }
  }

  function Student(name,dni,birth,degree,grade){
    if(!(this instanceof Student)) throw new InvalidAccessConstructorException();
    abstractCreateLock = false;
    Person.call(this,name,dni,birth);
    if(!degree) throw new Error('Empty value');
    if(!(degree === 'bachelor' || degree === 'vocational' || degree === 'others')) throw new Error('Invalid degree');
    this.degree = degree;
    if(!grade) throw new Error('Empty value');
    if(grade < 0) throw new Error('Invalid grade');
    this.grade = grade;

    let oldToString = this.toString;
    this.toString = ()=>{
      return oldToString.call(this,name,dni,birth) + ' ::: ' + this.degree + ' ::: ' + this.grade;
    }
  }

  function Professor(name,dni,birth){
    if(!(this instanceof Professor)) throw new InvalidAccessConstructorException();
    abstractCreateLock = false;
    Person.call(this,name,dni,birth);
  }


  abstractCreateLock=true;
  window.Person = Person;
  window.Student = Student;
  window.Professor = Professor;
})();