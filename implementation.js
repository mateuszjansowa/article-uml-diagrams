class SmartInterface {
    learn() {
        console.log('Learning...');
    }

    passTest() {
        console.log('Passing test...');
    }

    beEarly() {
        console.log('Wake up at 6 am...');
    }
}

class Student extends SmartInterface {
    #school;
    #subjects;

    constructor(school, subjects) {
        super();
        this.#school = school;
        this.#subjects = subjects;
    }
}

const student = new Student('MIT', ['Math', 'Physics', 'Chemistry']);
// dzieki rozszerzeniu interfejsu mamy dostęp do metody learn()
student.learn();
