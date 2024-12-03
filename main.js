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

console.log(Object.keys(orlando));
console.log(Object.getOwnPropertyNames(orlando));
console.log(Object.entries(orlando)); 0

console.log(Object.getOwnPropertyDescriptors(orlando));

Object.defineProperty(orlando, "pruebaDefineProperty", {
    value: "java script es lo mejor",
    enumerable: true,
    writable: true,
});

console.log(Object.getOwnPropertyDescriptors(orlando));