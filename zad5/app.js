const student = require("./student");

const FULLNAME = student.getStudentFullName();

const STUDENT_ID = student.getStudentId();

const http = require("http");

const PORT = 3000;

function requestListener(request, response) {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>About student</title></head>");
    response.write(`<body>My name is ${FULLNAME}. My student ID is ${STUDENT_ID}</body>`);
    response.write("<html>");
    response.end();
    console.log("RequestListener", response);
}

const server = http.createServer(requestListener);

server.listen(PORT);