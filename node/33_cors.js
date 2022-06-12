// 서버와 클라이인트를 다르게 할 수도 같이 할 수도 있음.
// cors - Cross-Origin Resource Sharing
// Origin - URL 구조의 프로토콜, 호스트, 포트를 합친것.
//

const express = require("express");
const app = express();
const cors = require("cors");
//ex 뷰 고정코드
const corsOptions = {
  origin: "http://localhost:8080", // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};
//모든 라우터에서 실행.
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Ok");
});
//ex 서버
const corsOptions2 = {
  origin: "http://localhost:8081", // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};
//corsOptions2 에 해당 되는 인원만 접속 가능.
app.get("/products/:id", cors(corsOptions2), (req, res) => {});

app.listen(3000, function () {
  console.log("3000번 포트로 서버 실행.");
});
