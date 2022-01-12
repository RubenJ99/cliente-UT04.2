'use strict';

function Course(name,students,tutor){
    if(!(this instanceof Course)) throw new InvalidAccessConstructorException();
    if(!name) throw new Error('empty value');
    this.name = name;
    if(!students) throw new Error('Empty value');
    if(students < 0) throw new Error('Invalid grade');
    this.students = students;
    if(!tutor) throw new Error('Empty value');
    if(!(tutor instanceof Professor)) throw new Error('invalid professor');
    this.tutor = tutor;


}