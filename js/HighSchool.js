//RUBEN JUAREZ PEREZ 2DAW
"use strict";
/**
 * Creamos este objeto con el patron Singleton, de tal forma que cuando sea la primera vez que se llama a getInstance() este
 * retorne la funcion init() y su interior creado como cerramiento, luego tenderemos acceso a todas las propiedades y metodos publicos
 * que hay en el segundo return(dentro de init), estas tienen acceso a las propiedades privadas.
 * 
 * En caso de que se re instancie esta clase lo que hace es devolver el mismo objeto de forma que es el mismo punto de memoria
 */
const highSchoolSingleton = (function () {
  let instantiated;
  let inst;
  function init(name) {
    /**
     * Usando cerramientos creamos el objeto y la propiedad courses como argumentos privados, a los cuales tendran acceso
     * las propiedades publicas
     * @param {*} name Nombre del instituto
     */
    function HighSchoolConstructor(name) {
      this.name = name;
      Object.defineProperty(this, "courses", {
        get: function () {
          let nextIndex = 0;
          return {
            next: () => {
              return nextIndex < _storage.size()
                ? { value: _storage.get(nextIndex++), done: false }
                : { done: true };
            },
          };
        },
      });
     
    }
    let _storage = new ObjectList(Course, 50);
    inst = new HighSchoolConstructor(name);
    /**
     * Propiedades y metodos publicos de la clase HighSchool
     */
    return {
      name: inst.name,
      addCourse: function (course) {
        if (!(course instanceof Course)) throw new InvalidInstanceException('course', course);
        let idx = _storage.indexOf(course);
        if (idx !== -1) throw new RepeatedArgumentException(course);
        let newLength = _storage.add(course);
        return newLength;
      },
      removeCourse: function (course) {
        if (!(course instanceof Course)) throw new InvalidInstanceException('course', course);
        let idx = _storage.indexOf(course);
        if (idx === -1) throw new NotFoundArgumentException(param)
        let old = _storage.remove(idx);
        return old;
      },
      courses: inst.courses,
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
