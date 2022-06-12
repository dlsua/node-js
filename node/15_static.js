const express = require("express");
const app = express();

// app.use(express.static("public"));
//http://localhost:3000/images/logo.jpg
//static 같은 경우 접근할 때 옵션
app.use("/static", express.static("public"));

//http://localhost:3000/static/images/logo.png
app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
