function test() {
    return 'Hello from test.';
}
class Person {

    constructor(firstNane, firstSurname, lastSurname, birthDay) {
        this.firstNane = firstNane;
        this.firstSurname = firstSurname;
        this.lastSurname = lastSurname;
        this.birthDay = new Date(birthDay);
    }

    getFullName() {
        return `${this.firstNane} ${this.firstSurname} ${this.lastSurname}`;
    }

    getAge() {
        return new Date().getFullYear() - this.birthDay.getFullYear();
    }
}

const person = new Person('Cristian', 'Quispe', 'Ramirez', '1987-01-10');
console.log(person.getFullName(), person.getAge());
console.log(test());