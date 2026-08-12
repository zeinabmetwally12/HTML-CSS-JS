class Person {
    #email;
    #ID;

    constructor(name, email, ID) {
        this.name = name;
        this.email = email;
        this.ID = ID;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        if (email.includes("@")) {
            this.#email = email;
        } else {
            console.log("Invalid email");
        }
    }

    get ID() {
        return this.#ID;
    }

    set ID(ID) {
        if (ID > 0) {
            this.#ID = ID;
        } else {
            console.log("Invalid ID");
        }
    }

    describeRole() {
        console.log("I am a person in the school.");
    }
}


class Principal extends Person {
    constructor(name, email, ID) {
        super(name, email, ID);
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
        console.log(member.name + " was added ");
    }

    removeMember(member) {
        const index = this.members.indexOf(member);

        if (index !== -1) {
            this.members.splice(index, 1);
            console.log(member.name + "was removed");
        }
    }

    listMembers() {
        console.log("School Members:");

        this.members.forEach(function(member) {
            console.log(member.name);
        });
    }

    describeRole() {
        console.log(this.name + " is the Principal ");
    }
}


class Teacher extends Person {
    constructor(name, email, ID, subject) {
        super(name, email, ID);
        this.subject = subject;
        this.students = [];
    }

    gradeStudent(student, grade) {
        this.students.push({
            name: student.name,
            grade: grade
        });

        console.log(
            student.name + " got " + grade + " in " + this.subject
        );
    }

    listStudents() {
        console.log("Students:");

        this.students.forEach(function(student) {
            console.log(student.name + ": " + student.grade);
        });
    }

    describeRole() {
        console.log(this.name + " is a Teacher ");
    }
}


class Student extends Person {
    constructor(name, email, ID) {
        super(name, email, ID);
        this.subjects = [];
    }

    enroll(subject) {
        this.subjects.push(subject);
        console.log(this.name + " enrolled in " + subject);
    }

    viewSubjects() {
        console.log("Subjects:");

        this.subjects.forEach(function(subject) {
            console.log(subject);
        });
    }

    describeRole() {
        console.log(this.name + " is a Student ");
    }
}


const principal = new Principal(
    "Soha",
    "soha@school.com",
    1
);

const teacher = new Teacher(
    "Esraa",
    "esraa@school.com",
    2,
    "JavaScript"
);

const student = new Student(
    "Zeinab",
    "zeinab@school.com",
    3
);


principal.addMember(teacher);
principal.addMember(student);
principal.listMembers();


teacher.gradeStudent(student, 95);
teacher.listStudents();


student.enroll("JavaScript");
student.enroll("Database");
student.viewSubjects();


const people = [principal, teacher, student];

people.forEach(function(person) {
    person.describeRole();
});