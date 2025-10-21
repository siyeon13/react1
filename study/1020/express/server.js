//import http from "http";
import express from "express";
import postRoutes from "./routes/post.routes.js";

const app = express();

app.use(express.json());

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
//   res.end("OK");
// });

/* app.get("/", (req, res) => {
  res.send("OK");
});

//Router
app.get("/users", (req, res) => {
  res.send("모든 사용자 목록");
});

app.post("users", (req, res) => {
  res.send("사용자 생성");
});

app.get("/users/:id", (req, res) =>
  res.send(`ID : ${req.params.id} 사용자 조회`)
); */

app.use("/api/v1/posts", postRoutes);
/* Express는 app.use("/api/v1/posts", postRoutes) 라고 하면,
postRoutes 안의 모든 경로 앞에 **자동으로 /api/v1/posts**가 붙는다 */

// server.listen(3000, () => {
//   console.log("OK Server was started!");
// });

app.listen(3000, () => {
  console.log("OK Server was started!");
});

// 백엔드에서 라우터는 시작점이다 ? -> 요청이 들어올 때 어떤 코드로 연결될지를 결정하는 길 안내표

/* 콘솔에서 테스트 할 수 있는 방법
fetch("http://localhost:3000/api/v1/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "테스트", content: "브라우저에서 보냄" })
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
   */
