//RUBEN JUAREZ PEREZ 2DAW

//CREACION DE OBJETOS PARA TESTING
function Student(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

function Laptop(brand, model, processor) {
  this.brand = brand;
  this.model = model;
  this.processor = processor;
}
//TESTING DE LA APLICACION
(function () {
  let regularList = new List(10);
  let student1 = new Student("Ruben", 22, 176);
  let student2 = new Student("Andrea", 20, 164);
  let student3 = new Student("Miguel", 25, 186);
  try {
    console.log("--- COMIENZA EL TESTEO DE LIST ---");
    console.log("isEmpty -> Expected: true / Got: " + regularList.isEmpty());
    console.log("isFull -> Expected: flase / Got: " + regularList.isFull());
    console.log("size -> Expected: 0 / Got: " + regularList.size());
    console.log(">>(Añado 3 estudiantes usando Add)<<");
    regularList.add(student1);
    regularList.add(student2);
    console.log("size -> Expected: 3 / Got: " + regularList.add(student3));
    console.log(">>(Añado 1 estudiantes usando AddAt pos = 3 <<");
    console.log("size -> Expected: 4 / Got: " + regularList.addAt(student1, 3));
    console.log(
      "get(pos=3) -> Expected: student1(Ruben) / Got: " + regularList.get(3)
    );
    console.log(
      "toString -> Expected: 4 obj / Got: \n" + regularList.toString()
    );
    console.log(
      "indexOf(student2) -> Expected: 1 / Got: " + regularList.indexOf(student2)
    );
    console.log(
      "lastIndexOf(student1) -> Expected: 3 / Got: " +
        regularList.lastIndexOf(student1)
    );
    console.log("capacity -> Expected: 10 / Got: " + regularList.maxCapacity());
    console.log(">>(Borro los datos usando clear)<<");
    regularList.clear();
    console.log("nueva size -> Expected: 0 / Got: " + regularList.size());
    console.log(">>(Añado 3 estudiantes usando Add)<<");
    regularList.add(student3);
    regularList.add(student2);
    regularList.add(student1);
    console.log(
      "firstElement -> Expected: Student3(Miguel) / Got: " +
        regularList.firstElement()
    );
    console.log(
      "lastElement -> Expected: Student1(Ruben) / Got: " +
        regularList.lastElement()
    );
    console.log(
      "remove(indx = 0) -> Expected: Student3(Miguel) / Got: " +
        regularList.remove(0)
    );
    console.log(
      "removeElement(Student2) -> Expected: Student2(Andrea) / Got: " +
        regularList.removeElement(student2)
    );
    console.log(
      "set(student2/indx=0) -> Expected: Student1(Ruben) / Got: " +
        regularList.set(student1, 0)
    );
  } catch (error) {
    console.error(error.toString());
  }
  console.log(" >> PROBANDO ERRORES <<");
  try{
     regularList.add();
  }catch(error){
    console.error('Añadimos un elemento vacio -> ' + error.toString());
  }

  try{
   regularList.addAt(student3,100);
  }catch(error){
    console.error('Añadimos un elemento a una posicion fuera de limites -> ' + error.toString());
  }

  let objList = new ObjectList(5,Student);
  console.log('\n\n\n--- COMIENZA EL TESTEO DE OBJECTLIST ---');
  try{
    console.log('>> Añadimos 2 estudiantes usando Add <<');
    objList.add(student1);
    console.log('new size -> Expected: 2 / Got: ' + objList.add(student2));
    console.log('>> Añadimos 1 estudiante usando addAt <<');
    console.log('new size -> Expected: 3 /Got: ' + objList.addAt(student1,2));
    console.log('indexOf(Student1) -> Expected: 0 / Got: '+objList.indexOf(student1));
    console.log('lastIndexOf(student2) -> Expected: 2 / Got: ' + objList.lastIndexOf(student1));
    console.log('removeElement(Student2) ->Expected: Student2(Andrea) / Got: ' + objList.removeElement(student2));
    console.log('set(student3,4) -> Expected: undefined / Got : ' + objList.set(student3,4));
  }catch(error){
    console.error(error.toString());
  }
  console.log(" >> PROBANDO ERRORES <<");
  try{
    objList.add(2);
  }catch(error){
    console.error('Insertamos un primitivo -> ' + error.toString());
  }

  try{
    let hp = new Laptop('HP','Pavillion','i5 5500U');
    objList.lastIndexOf(hp);
  }catch(error){
    console.error('Buscamos un objeto que no es tipo student -> ' + error.toString());
  }

  let ordObjList = new OrderedObjectList(5,Student,(a,b)=>{return a.age - b.age});
  console.log('\n\n\n--- COMIENZA EL TESTEO DE ORDEREDOBJECTLIST ---');
  try{
    console.log('>> Añadimos 2 estudiantes usando Add <<');
    ordObjList.add(student3);
    ordObjList.add(student2);
    console.log('toString -> Expected: std2,std3 / Got: ' + ordObjList.toString());
  }catch(error){
    console.error(error.toString());
  }

  try{
    ordObjList.addAt();
  }catch(error){
    console.error('Error al llamar a addAt porque no existe: ' + error.toString())
  }

  try{
    ordObjList.lastIndexOf();
  }catch(error){
    console.error('Error al llamar a lastIndexOf porque no existe: ' + error.toString())
  }

  try{
    ordObjList.set();
  }catch(error){
    console.error('Error al llamar a set porque no existe: ' + error.toString())
  }


})();
