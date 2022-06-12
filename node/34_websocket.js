const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);
//서버에서 데이터를 처리. 클라이언트에서는 서버에서 데이터를 받음.
const corsOptions = {
  origin: "http://localhost:5502",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5502",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    // socket 연결이 종료됐을 때
  });
//클라이언트에서 데이터를 받을 때. 서버로 전달
  socket.on("client2server", (data) => {
    console.log(data); // 클라이언트로 부터 전달된 메시지
  });
});

const sendMsgToClient = () => {
  setInterval(() => {
    //이벤트 발생하는 데이터적어주고.
    io.emit("server2client", {
      code: `item${Math.random()}`,
      price: Math.random(),
    });
  }, 1000);
};

app.get("/socket", (req, res) => {
  sendMsgToClient();
  res.send("서버로 부터 메시지 전송 시작");
});

httpServer.listen(3000, () => {
  console.log("3000번 포트로 서버가 실행됐습니다.");
});
