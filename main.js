const orlando = {
    name: "Orlando",
    age: 28,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

// console.log(Object.keys(orlando));
// console.log(Object.getOwnPropertyNames(orlando));
// console.log(Object.entries(orlando)); 

// // console.log(Object.getOwnPropertyDescriptors(orlando));

// Definir propiedad no enumerable, no editable, no configurable
Object.defineProperty(orlando, "pruebaDefinePropertyFalse", {
    value: "esteEsFalse",
    enumerable: false,
    writable: false,
    configurable: false
});

// Propiedad no enumerable, pero editable y configurable
Object.defineProperty(orlando, "navigator", {
    value: "Chrome",
    enumerable: false,
    writable: true,
    configurable: true
});

// Propiedad enumerable, no editable, pero configurable
Object.defineProperty(orlando, "editor", {
    value: "Visual Studio Code",
    enumerable: true,
    writable: false,
    configurable: true
});

// Propiedad enumerable, editable, no configurable
Object.defineProperty(orlando, "terminal", {
    value: "WSL",
    enumerable: true,
    writable: true,
    configurable: false
});

// Ver descriptores de propiedades actuales
console.log(Object.getOwnPropertyDescriptors(orlando));

// Sellar el objeto: no permite agregar o eliminar propiedades
Object.seal(orlando);

// Congelar el objeto: no permite modificar nada
Object.freeze(orlando);

// Ver descriptores tras aplicar `seal` y `freeze`
console.log(Object.getOwnPropertyDescriptors(orlando));
