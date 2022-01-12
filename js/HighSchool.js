"use strict";

let HighSchool = (function () {
  let instantiated;
  function init() {
    return function (){
        
    }
  }
  return {
    getInstance: function () {
      if (!instantiated) {
        instantiated = init();
      }
      return instantiated;
    },
  };
})();
