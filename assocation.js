class Subject {
    #name;
    #level;

    constructor(name, level) {
        this.#name = name;
        this.#level = level;
    }
}

class Teacher {
    #school;
    #subjects;

    constructor(school, subjects) {
        this.#school = school;
        this.#subjects = subjects;
    }

    addSubject(subject) {
        if (!(subject instanceof Subject)) {
            throw new Error('Invalid subject');
        }

        this.#subjects.push(subject);
    }

    removeSubject(subject) {
        if (!(subject instanceof Subject)) {
            throw new Error('Invalid subject');
        }

        this.#subjects = this.#subjects.filter(s => s !== subject);
    }
}

const subject = new Subject('Math', 1);
const teacher = new Teacher('MIT', []);

teacher.addSubject(subject);
console.log(teacher);
