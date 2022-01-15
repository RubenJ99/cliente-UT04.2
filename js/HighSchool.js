"use strict";

const highSchoolSingleton = (function () {
  let instantiated;
  function init(name) {
    let _name = name;
    let _storage = new ObjectList(Course,50);

    Object.defineProperty(this,'courses',{
      get: () => {
          let nextIndex = 0;
          return {
              next: () => {
                  return nextIndex <  _storage.length ? {value: _storage[nextIndex++],done:false} : {done: true};
              }
          }
      }
    });
    return {
      name: _name,
      addCourse: function(course){
        if(!(course instanceof Course)) throw new Error('Error instancia');
        let inArr = _storage.find((elem) => {
          return elem.name === course.name;
        });
        if(inArr) throw new Error('Course already in database');
        _storage.add(course);
      },
      removeCourse: function(course){
        let idx;
        let inArr = _storage.find((elem,index) => {
          idx = index;
          return elem.name === course.name;
        });
        if(!inArr) throw new Error('Course not in database');
        _storage.remove(idx);
      }
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