class Subject {
    #name;
    #level;

    constructor(name, level) {
        this.#name = name;
        this.#level = level;
    }

    getName() {
        return this.#name;
    }

    getLevel() {
        return this.#level;
    }
}

class Teacher {
    #subjects;

    constructor(subjects) {
        this.#subjects = subjects;
    }

    getSubjects() {
        return this.#subjects;
    }

    addSubject(subject) {
        if (!subject instanceof Subject) {
            throw new Error('Invalid subject');
        }

        this.#subjects.push(subject);
    }

    removeSubject(subject) {
        if (!subject instanceof Subject) {
            throw new Error('Invalid subject');
        }

        this.#subjects.filter(s => s !== subject);
    }

    teach(subject) {
        if (!subject instanceof Subject) {
            throw new Error('Invalid subject');
        }

        console.log(
            `I'm teaching ${subject.getName()},
            at level ${subject.getLevel()}`
        );
    }
}

const subject = new Subject('Math', 1);
const anotherSubject = new Subject('English', 2);

const teacher = new Teacher([subject]);
teacher.addSubject(anotherSubject);
console.log(teacher.getSubjects());
