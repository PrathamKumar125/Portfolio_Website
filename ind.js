const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync("C++ programs\Portfolio Website\index.html");
// const about = fs.readFileSync("./about.html");
// const services = fs.readFileSync("./services.html");
// const contact = fs.readFileSync("./contact.html");
const server = http.createServer(function (request, response) {
    console.log(request.url);
    url = request.url;
    request.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    if (url == "./") {
      response.end(home);
    } 
    // else if (url == "./services") {
    //   response.end(services);
    // } else if (url == "./about") {
    //   response.end(about);
    // } else if (url == "./contact") {
    //   response.end(contact);
    // } else {
    //   response.statusCode = 404;
    //   response.end("<h1>404 not found<h1>");
    // }
    // response.end(home);
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
