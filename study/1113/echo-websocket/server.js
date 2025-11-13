const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 3000 });

// 처음에 서버 접속
server.on("connection", (ws) => {
  ws.send("[서버 접속 완료]");

  // 서버 접속 되면 아래가 실행준비
  ws.on("message", (message) => {
    console.log("message: " + message); //  서버에서 콘솔확인
    ws.send(`서버로부터 응답 : ${message}`);
  });

  // 연결 끊을때
  ws.on("close", () => {
    console.log("클라이언트 접속 해제");
  });
});
