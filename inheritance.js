class AbstractPerson {
    #name;
    #age;
    #isAdult;

    constructor(name, age, isAdult) {
        this.#name = name;
        this.#age = age;
        this.#isAdult = isAdult;
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

    getIsAdult() {
        return this.#isAdult;
    }

    setIsAdult(isAdult) {
        this.#isAdult = isAdult;
    }
}

class Teacher extends AbstractPerson {
    #school;
    #students;

    constructor(name, age, isAdult, school, students) {
        super(name, age, isAdult);
        this.#school = school;
        this.#students = students;
    }

    getSchool() {
        return this.#school;
    }
}

const teacher = new Teacher('John', 30, true, 'MIT', ['John', 'Mary', 'Peter']);
console.log(teacher.getName());
