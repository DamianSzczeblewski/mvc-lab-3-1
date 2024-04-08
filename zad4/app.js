const student = require("./student");

const FULLNAME = student.getStudentFullName();

const STUDENT_ID = student.getStudentId();

const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log(`My name is ${FULLNAME}. My student ID is ${STUDENT_ID}`);
});
