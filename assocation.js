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
    #name;

    constructor(name) {
        this.#name = name;
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
const teacher = new Teacher('Matt');

teacher.teach(subject);
