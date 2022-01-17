"use strict";

const highSchoolSingleton = (function () {
  let instantiated;
  function init(name) {
    let _name = name;
    let _storage = new ObjectList(Course,50);

    return {
      name: _name,
      addCourse: function(course){
        if(!(course instanceof Course)) throw new Error('Error instancia');
        let idx = _storage.indexOf(course);
        if(idx !== -1) throw new Error('Course already in database');
        let newLength =  _storage.add(course);
        return newLength;
      },
      removeCourse: function(course){
        if(!(course instanceof Course)) throw new Error('Error instancia');
        let idx = _storage.indexOf(course);
        if(idx === -1) throw new Error('Course not in database');
        let old =  _storage.remove(idx);
        return old;
      },
      courses:  () => {
        let nextIndex = 0;
        return {
            next: () => {
                return nextIndex <  _storage.size() ? {value: _storage.get(nextIndex++),done:false} : {done: true};
            },
        }
      },
      peek: () => {return _storage.storage}
    };
  }
  return {
    getInstance: function (name) {
      if (!instantiated) {
        instantiated = init(name);
      }
      return instantiated;
    },
  };
})();