"use strict";

let HighSchool = (function () {
  let instance;
  function HighSchool(){
    this.prueba = ()=>{
      return 'aaa';
    }
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = new HighSchool();
        instance.constructor = null;
      }
      return instance;
    },
  };
})();
