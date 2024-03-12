const student = require("./student");

const id = 3;

const FULLNAME = student.getStudentFullName(id);

const STUDENT_ID = student.getStudentId(id);

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