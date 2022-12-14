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

//Another example:
const a = function() {
    console.log('a', this)
    const b = function() {
        console.log('b', this)
        const c = {
            hi: function() {
                console.log('c', this)
            }
        }
        c.hi()
    }
    b()
}
a()

// The Global object or "Window" calls a() and Window also calls b() because window runs through the "a" function which has b() in its scope. There is nothing to the left of b() where when we call "c.hi()" the "this" object is the property "hi" of the function "c"

//Note: using "this" in a function that's in a method gets bound to the Window
//example:

var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
}

//However, by using an arrow function it will be bound to object "c" and return name: 'jay' because the arrow function lexically binds "this" 
//example
var c = {
    name: 'jay',
    say() {return () => {console.log(this)}}
}


