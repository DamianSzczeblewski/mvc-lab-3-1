const FULLNAME = "Damian Szczeblewski";

const STUDENT_ID = 42896;

function getStudentFullName(id) {
    if (id == 0) return FULLNAME;
    else if (id == 1) return "Kacper Nowak"
    else if (id == 2) return "Maja Kowalska"
    else return "Michal Wisniewski"
}

function getStudentId(id) {
    if (id == 0) return STUDENT_ID;
    else if (id == 1) return 111222;
    else if (id == 2) return 222333;
    else return 333444;
}

module.exports = {
    getStudentFullName,
    getStudentId,
}