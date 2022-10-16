// Definition: “This” is the object that the function is a property of

//1: "this" gives methods access to their object
//2: allows you to execute same code for multiple objects

function importantPerson() {
    console.log(this.name+"!")
}

const obj1 = {
    name: "Cassy",
    importantPerson: importantPerson
}
const obj2 = {
    name: "Jacob",
    importantPerson: importantPerson
}
obj1.importantPerson() //returns Cassy!
obj2.importantPerson() //returns Jacob!

// Code explanation: obj1.importantPerson() calls the improtant person peramitter in the obj1 object which calls the importantPerson function which uses "this" which is obj1.name which is equal to Cassy
