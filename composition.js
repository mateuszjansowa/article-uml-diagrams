class Classroom {
    #name;
    #capacity;
    #color;

    constructor(name, capacity, color) {
        this.#name = name;
        this.#capacity = capacity;
        this.#color = color;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    setCapacity(capacity) {
        this.#capacity = capacity;
    }

    paintWalls(color) {
        this.#color = color;
    }
}

class School {
    #classrooms;

    constructor() {
        this.#classrooms = [
            new Classroom('01', 20, 'white'),
            new Classroom('02', 30, 'yellow'),
            new Classroom('03', 10, 'blue')
        ];
    }

    getClassrooms() {
        return this.#classrooms;
    }

    addClassroom(classroom) {
        if (!classroom instanceof Classroom) {
            throw new Error('Invalid classroom');
        }

        this.#classrooms.push(classroom);
    }

    renovateClassroom(name, color) {
        const classroom = this.#classrooms.find(c => c.getName() === name);
        if (!classroom) {
            throw new Error('Classroom not found');
        }
        classroom.paintWalls(color);
    }
}

const school = new School();
school.renovateClassroom('01', 'red');
console.log(school);
