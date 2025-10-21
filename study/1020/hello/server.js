//import { json } from "body-parser";
import http from "http";
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
//   res.end("Node.js Running!");
// });

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    const date = new Date();
    res.end(JSON.stringify({ message: "Hello Node.js~~~!", date }));
  } else if (req.url === "/hello2") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(JSON.stringify("Hello Node.js2"));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(3000, () => {
  console.log("Server is running on 3000");
  setTimeout(() => {
    const date = new Date();
    console.log(date);
  }, 2000);
});
