class AbstractPerson {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getAge() {
        return this.#age;
    }

    setAge(age) {
        this.#age = age;
    }

    isAdult() {
        return this.#age >= 18;
    }
}

class Teacher extends AbstractPerson {
    #schoolName;
    #students;

    constructor(name, age, schoolName, students) {
        super(name, age);
        this.#schoolName = schoolName;
        this.#students = students;
    }

    getSchool() {
        return this.#schoolName;
    }
}

const teacher = new Teacher('John', 30, true, 'MIT', ['John', 'Mary', 'Peter']);
console.log(teacher.getName());
